package com.example.algamoney.api.security.util;

import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.*;
import java.net.*;

public class IniciacaoInfoboxProperties {
    static Settings clusterSettings;
    static TransportClient transportClient;
    static Client client;
    public static void main (String[] args) throws JSONException, UnknownHostException {
        clusterSettings = Settings.builder()
                .put("cluster.name", "elasticsearch")
                .build();

        transportClient = new PreBuiltTransportClient(clusterSettings)
                .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("186.248.79.46"), 9200));

        client = new PreBuiltTransportClient(Settings.EMPTY).addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("186.248.79.46"), 9200));

        File file = new File("/home/claudinei/Downloads/infobox_properties_en.ttl");
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            line = br.readLine();
            while (line != null) {
                String name = "";
                String property = "";
                String value = "";
                JSONObject entidade = new JSONObject();
                do{
                    name = getName(line);
                    if(name != null){
                        entidade.put("originName", name.toLowerCase().replaceAll(",", "")
                                .replaceAll("\\.", ""));

                        int contOfProperties = 0;
                        JSONObject JSONObjpropriedade = new JSONObject();
                        JSONArray jsonArrayDeUmaPropriedade = new JSONArray();
                        do{
                            property = getProperty(line);
                            if(property != null){
                                String propertySpecial = property.replaceAll("\\(", "\\" + "\\(")
                                                                 .replaceAll("\\)", "\\" + "\\)")
                                                                 .replaceAll(",", "")
                                                                 .replaceAll("\\.", "");
                                value = getValue(line, propertySpecial);
                                if(value != null){
                                    contOfProperties = contOfProperties + 1;

                                    JSONObjpropriedade.put(property, value);

                                    jsonArrayDeUmaPropriedade.put(value);
                                    //System.out.println(name + " " + property + " " + value);
                                }
                            }
                            line = br.readLine();
                        }while(line != null && getProperty(line).equals(property));
                        if(contOfProperties == 1){
                            entidade.put(property, value);
                        }else{
                            entidade.put(property, jsonArrayDeUmaPropriedade);
                        }

                    }else{
                        System.out.println("ERRO: " + line);
                    }
                    if(name == null){
                        line = br.readLine();
                    }
                }while( line  != null && getName(line) != null && getName(line).equals(name));
//                System.out.println(entidade);
//                System.out.print(".");
//                putJsonElasticSearch(entidade);
                if(entidade.length() > 0){
                    putUsingApi(entidade);
                }
            }
            br.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getName(String line){
        try{
            String[] rest = line.split("resource/");
            String[] half = rest[1].split("> ");
            String name = half[0];
            return name;
        }catch (Exception e){
            System.out.println("ERRO AO PEGAR NOME: " + line);
            e.printStackTrace();
        }
        return null;

    }

    public static String getProperty(String line){
        try{
            String[] rest = line.split("property/");
            String[] half = rest[1].split("> ");
            String property = half[0];
            return property;
        }catch (Exception e){
            System.out.println("ERRO AO PEGAR PROPRIEDADE: " + line);
            e.printStackTrace();
        }
        return null;
    }

    public static String getValue(String line, String property){
        try {
            String[] aux = line.split(property + "> ");
            String aux2 = aux[1];
            String[] aux3 = aux2.split(" \\.");
            String value = aux3[0];
            return value;
        }catch (Exception e){
            System.out.println("ERRO AO PEGAR VALOR: " + line + "\nProperty: " + property);
            e.printStackTrace();
        }
        return null;
    }

    public static boolean putJsonElasticSearch(JSONObject object){
        System.out.println(object);
        URL url;
        try {
            url = new URL("http://186.248.79.46:9200/entidades/" + object.getString("originName"));
            HttpURLConnection hurl = (HttpURLConnection) url.openConnection();
            hurl.setRequestMethod("PUT");
            hurl.setDoOutput(true);
            hurl.setRequestProperty("Content-Type", "application/json");

            String payload = object.toString();

            OutputStreamWriter osw = new OutputStreamWriter(hurl.getOutputStream());
            osw.write(payload);
            osw.flush();
            osw.close();

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(hurl.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            System.out.println(response);
        } catch (MalformedURLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return true;
    }

    public static boolean putUsingApi(JSONObject object) throws UnknownHostException, JSONException {

        IndexResponse response = client.prepareIndex("infobox_properties", object.getString("originName"))
                .setSource(object.toString(), XContentType.JSON)
                .get();
        System.out.println(object.getString("originName") + " " + response.getId());
        return true;
    }

}