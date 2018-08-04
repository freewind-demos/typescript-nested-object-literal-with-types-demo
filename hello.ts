type Site = {
    name: String,
    url: String,
    categories: {
        name: String,
        description: String,
        demos: {
            name: String,
            description: String
        }[]
    }[]
};

function generateSiteData(): Site {
    return JSON.parse(`
    {
        "name": "shuzu",
        "url": "http://shuzu.org",
        "categories": [{
            "name": "java-demos",
            "description": "many java demos",
            "demos": [{
                "name": "hello-world-demo",
                "description": "simplest hello world demo"
            }]
        }, {
            "name": "kotlin-demos",
            "description": "many kotlin demos",
            "demos": [{
                "name": "hello-world-demo",
                "description": "simplest hello world demo"
            }]
        }]
    }
    `);

}

const mySite = generateSiteData();
console.log(mySite.categories[0].demos[0].name);
