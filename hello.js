function generateSiteData() {
    return JSON.parse("\n    {\n        \"name\": \"shuzu\",\n        \"url\": \"http://shuzu.org\",\n        \"categories\": [{\n            \"name\": \"java-demos\",\n            \"description\": \"many java demos\",\n            \"demos\": [{\n                \"name\": \"hello-world-demo\",\n                \"description\": \"simplest hello world demo\"\n            }]\n        }, {\n            \"name\": \"kotlin-demos\",\n            \"description\": \"many kotlin demos\",\n            \"demos\": [{\n                \"name\": \"hello-world-demo\",\n                \"description\": \"simplest hello world demo\"\n            }]\n        }]\n    }\n    ");
}
var mySite = generateSiteData();
console.log(mySite.categories[0].demos[0].name);
