const Blog = require('./models/BlogModel.js');
const database = require('./models/db.js');

database.connect();

var blogs = [
    {
        blog_title: 'Project Lumad',
        blog_content: 'Project Lumad aims to raise funds to procure food and care packages for the Bakwit Lumad students in the University of the Philippines-Diliman, under the Department of Marginalized Community Action of The Initiative PH. Project Lumad advocates for the Lumad students’ right to claim education by supporting their Bakwit school through fundraising money to provide food packages and hygiene kits to the 111 student and teacher residents safe inside the University of the Philippines Diliman. With the pandemic depleting their already limited resources, threatening the students and teachers with hunger and disease, Project Lumad asks you to help save the school by sharing aid.',
        blog_date: '03/07/2020',
        blog_keyword: 'Lumad',
    },

    {
        blog_title: 'Hatid Kapatid',
        blog_content: 'Hatid Kapatid is an independent youth volunteer effort organized to provide financial and information aid to taxi and ride-hailing app drivers in Metro Manila affected by the COVID-19 pandemic.',
        blog_date: '03/30/2020',
        blog_keyword: 'Kapatid',
    },

    {
        blog_title: 'Project Pagsibol',
        blog_content: 'Project Pagsibol is a donation drive by The Scarecrow PH, in partnership with The Initiative PH, to help farmers who are affected by the COVID-19 crisis. Through donations, Project Pagsibol aims to procure relief packages to upland farmers.',
        blog_date: '04/08/2020',
        blog_keyword: 'Pagsibol',
    },

    {
        blog_title: 'Project Example 1',
        blog_content: 'Project Example 1 is a donation drive by The Scarecrow PH, in partnership with The Initiative PH, to help farmers who are affected by the COVID-19 crisis. Through donations, Project Pagsibol aims to procure relief packages to upland farmers.',
        blog_date: '06/17/2020',
        blog_keyword: 'Example',
    },

    {
        blog_title: 'Project 2 Example',
        blog_content: 'Project 2 Example is a donation drive by The Scarecrow PH, in partnership with The Initiative PH, to help farmers who are affected by the COVID-19 crisis. Through donations, Project Pagsibol aims to procure relief packages to upland farmers.',
        blog_date: '12/17/2020',
        blog_keyword: 'Example',
    },

    {
        blog_title: 'Example Project 3',
        blog_content: 'Example Project 3 is a donation drive by The Scarecrow PH, in partnership with The Initiative PH, to help farmers who are affected by the COVID-19 crisis. Through donations, Project Pagsibol aims to procure relief packages to upland farmers.',
        blog_date: '10/28/2020',
        blog_keyword: 'Example',
    },
    
];

database.insertMany(Blog, blogs);
