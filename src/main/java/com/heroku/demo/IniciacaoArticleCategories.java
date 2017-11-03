package com.example.algamoney.api.security.util;
import org.apache.http.HttpHost;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Setting;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.node.Node;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.*;
import java.net.*;

import org.elasticsearch.transport.client.PreBuiltTransportClient;

public class IniciacaoArticleCategories {
    static Settings clusterSettings;
    static TransportClient transportClient;
    static Client client;
    static RestClient restClient;

    public static void main (String[] args) throws JSONException, UnknownHostException {
        System.out.println("1");
        clusterSettings = Settings.builder()
                .put("cluster.name", "elasticsearch")
                .build();

        System.out.println("2");
        /*transportClient = new PreBuiltTransportClient(clusterSettings)
                .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("172.17.0.39"), 9200));*/

        System.out.println("3");
        client = new PreBuiltTransportClient(clusterSettings).addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("186.248.79.46"), 9200));

        System.out.println("4");
//        File file = new File("/home/claudinei/Downloads/infobox_properties_en.ttl");
        File file = new File("/home/claudinei/Iniciacao/dbpedia/article_categories_en_example.txt");
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            line = br.readLine();
            while (line != null) {
                String name = "";
                String subject = "";
                String value = "";
                JSONObject entidade = new JSONObject();
                int contOfProperties = 0;
                JSONArray jsonArrayDeUmaPropriedade = new JSONArray();
                do{
                    name = getName(line);
                    if(name != null){
                        entidade.put("originName", name.toLowerCase().replaceAll(",", "")
                                .replaceAll("\\.", ""));


                        JSONObject JSONObjpropriedade = new JSONObject();

                            subject = getSubject(line);
                            if(subject != null){
                                String propertySpecial = subject.replaceAll("\\(", "\\" + "\\(")
                                                                 .replaceAll("\\)", "\\" + "\\)")
                                                                 .replaceAll(",", "")
                                                                 .replaceAll("\\.", "");
                                value = getValue(line);
                                if(value != null){
                                    contOfProperties = contOfProperties + 1;

//                                    JSONObjpropriedade.put(subject, value);

                                    jsonArrayDeUmaPropriedade.put(value);
                                    //System.out.println(name + " " + property + " " + value);
                                }
                            }
                            line = br.readLine();

                        /*if(contOfProperties == 1){
                            entidade.put(subject, value);
                        }else{
                            entidade.put(subject, jsonArrayDeUmaPropriedade);
                        }*/

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
                entidade.put(subject, jsonArrayDeUmaPropriedade);
                if(entidade.length() > 0){
                    System.out.println(entidade);
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
            name.replaceAll(",", "").replaceAll("_", " ");

            return name;
        }catch (Exception e){
            System.out.println("ERRO AO PEGAR NOME: " + line);
            e.printStackTrace();
        }
        return null;

    }

    public static String getSubject(String line){
        try{
            String[] rest = line.split("terms/");
            String[] half = rest[1].split("> ");
            String property = half[0];
            return property;
        }catch (Exception e){
            System.out.println("ERRO AO PEGAR PROPRIEDADE: " + line);
            e.printStackTrace();
        }
        return null;
    }

    public static String getValue(String line){
        try {
            String[] aux = line.split("/resource/Category:");
            String category = aux[1].split("> \\.")[0];
            return category;
        }catch (Exception e){
            System.out.println("ERRO AO PEGAR VALOR: " + line);
            e.printStackTrace();
        }
        return null;
    }

    public static boolean putJsonElasticSearch(JSONObject object){
        System.out.println(object);
        URL url;
        try {
            url = new URL("http://172.17.0.39:9200/entidades/" + object.getString("originName"));
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

        IndexResponse response = client.prepareIndex("article_categories", object.getString("originName"))
                .setSource(object.toString(), XContentType.JSON)
                .get();
        System.out.println(object.getString("originName") + " " + response.getId());
        return true;
    }

}