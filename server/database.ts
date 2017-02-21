var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

var config = null;
if (fs.existsSync('server/config.json')) {
var fileContent = fs.readFileSync('server/config.json', 'utf8');
  config = JSON.parse(fileContent);
} else {
config = {
  db_file: 'server/db.sqlite'
}
}

if (!fs.existsSync(config.db_file)) {

  var db = new sqlite3.Database(config.db_file);

  db.serialize(function() {
    db.run('CREATE TABLE "career_locations" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT )');
    db.run('CREATE TABLE "career_types" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `type` TEXT )');
    db.run('CREATE TABLE "jobs" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `title` TEXT, `content` TEXT, `career_type_id` INTEGER, `career_location_id` INTEGER )');
    db.run('CREATE TABLE "press_releases" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `title` TEXT, `content` TEXT )');

    db.run('INSERT INTO career_locations (name) VALUES ("Detroit")');
    db.run('INSERT INTO career_locations (name) VALUES ("Santa Clara")');
    db.run('INSERT INTO career_locations (name) VALUES ("Cluj-Napoca")');
    db.run('INSERT INTO career_locations (name) VALUES ("Shanghai")');

    db.run('INSERT INTO career_types (type) VALUES ("BUSINESS DEVELOPMENT")');
    db.run('INSERT INTO career_types (type) VALUES ("DESIGN")');
    db.run('INSERT INTO career_types (type) VALUES ("ENGINEERING")');
    db.run('INSERT INTO career_types (type) VALUES ("INFORMATION TECHNOLOGY")');
    db.run('INSERT INTO career_types (type) VALUES ("MARKETING")');
    db.run('INSERT INTO career_types (type) VALUES ("PRODUCT MANAGEMENT")');
    db.run('INSERT INTO career_types (type) VALUES ("QUALITY ASSURANCE")');

    db.run('INSERT INTO press_releases (title, content) VALUES ("January 5, 2017 - Telenav\'s Scout GPS Link and Xevo Engine Link chosen for select 2018 Toyota vehicles", "Telenav, Inc. (NASDAQ: TNAV) and Xevo Inc. announced today that Scout® GPS Link by Telenav and Xevo™ Engine Link were chosen for select 2018 Toyota vehicles equipped with Entune 3.0. Powered by your phone and designed for your car, the next generation of Scout GPS Link provides a richer, fully interactive brought-in navigation experience into the vehicle.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Telenav and INRIX Enhance Navigation Data in OpenStreetMap", "SANTA CLARA, Calif., Dec. 13, 2016 - Telenav®, Inc. (NASDAQ: TNAV), a leader in connected car and location-based services, and INRIX, a leader in connected car services and transportation analytics, today announced a collaboration to accelerate improvements to OpenStreetMap (OSM). The companies are leveraging anonymous GPS probe data, in conjunction with Telenav\'s map data processing technology, to derive map attributes that are critical to navigation. These enhancements ensure OSM has the most accuate and up-to-date maps.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Telenav joins the select group of companies granted California Autonomous Vehicle Testing Permits", "SANTA CLARA, CALIF. - October 25, 2016 - Telenav®, Inc. (NASDAQ: TNAV), a leader in connected car and location-based services, today announced that it was granted an Autonomous Vehicle Testing Permit by the California Department of Motor Vehicles. Telenav is developing navigation, ADAS, mapping and big data intelligence platforms to serve various levels of autonomous driving.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Telenav expands global automotive presence to South Korea to further extend its reach into the Asian auto market", "SANTA CLARA, CALIF. - October 11, 2016 - Telenav®, Inc. (NASDAQ: TNAV), a leader in connected car and location-based services today announced the company\'s further expansion in Asia with Telenav Korea Limited, and the opening of its office in Incheon, South Korea, an emerging economic hub and innovation center located just west of Seoul.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Lexus to offer Scout® GPS Link by Telenav in its top-selling 2017 vehicles", "SANTA CLARA, CALIF. - AUGUST 24, 2016 - Telenav®, Inc. (NASDAQ: TNAV), a leader in connected car and location-based services today announced that luxury vehicle brand Lexus will begin offering Scout GPS Link in its most popular and best-selling models: Lexus RX, Lexus IS, Lexus ES, Lexus NX and Lexus RC equipped with Lexus Display Audio.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Telenav Integrated with Nuance Dragon Drive to Provide Automakers with Location and Context-Aware Cloud-Based Search for Vehicles", "SUNNYVALE, CALIF. - NOVEMBER 3, 2015 - Location-based services leader Telenav®, Inc. (NASDAQ: TNAV) today announced that its in-vehicle cloud-based search capabilities have been integrated with the Nuance Dragon Drive connected car platform, allowing automakers to deliver innovative in-car search capabilities optimized and designed for the driving experience.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Telenav and Ningbo Huazhong Holdings Company Announce Joint Venture Company, Huatai Telematics, to Bring Aftermarket Connected In-Car Navigation Services to the China Market", "Sunnyvale, California - October, 29, 2015 - Telenav (NASDAQ: TNAV), the leader in location-based platform services, announced today with Ningbo Huazhong Holdings Company Limited, a subsidiary of Huazhong Holdings Co. Ltd., a publicly traded company in Hong Kong, a joint venture company, Huatai Telematics Technology Co., Ltd. This combined endeavor capitalizes on Telenav\'s automotive navigation solutions to deliver personalized, connected navigation in aftermarket head units and products.")');
    db.run('INSERT INTO press_releases (title, content) VALUES ("Toyota chooses Telenav\'s Scout GPS Link and UIEvolution\'s UIEngine Link for select 2016 vehicles", "July 30, 2015 - Telenav®, Inc. (NASDAQ: TNAV), UIEvolution, Inc. and Toyota announced today that Scout GPS Link by Telenav and UIEngine Link™ by UIEvolution will be available in the 2016 Toyota Tacoma, as well as other 2016 Toyota vehicles in the United States equipped with Entune™ Audio Plus. Powered by your phone and designed for your car, Scout GPS Link is a brought-in navigation solution truly optimized and tailored for the in-vehicle experience.")');

    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Sr. Sales Engineer",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smartphone, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you!",
        1,
        1
      )
    `);

    // ===
    // ===
    // ===
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Lead Interaction Designer, In-Vehicle Experience",
        "Telenav’s Automotive Business Unit is seeking an exceptional interaction designer to help define the next generation in-vehicle software experience. As the Lead Interaction Designer of the reference product design team you will lead a small team of designers to define and create intelligent navigation for connected cars. You will report directly to the VP of User Experience and work closely with product managers, visual designers, and engineers, as well as work with fellow interaction designers to define in-vehicle software that displays across the center stack, instrument cluster and heads-up display.",
        2,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Technical Writer Auto UX - Temporary",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        2,
        2
      )
    `);

    // ===
    // ===
    // ===
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Android Developer",
        "We are looking for an Android Developer with a passion for pushing mobile technologies to the limits in the complex area of mapping products and navigation systems. You will work with a team of talented engineers to build the next generation of mobile applications in the Automotive industry.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Build Engineer",
        "Our goal is to work together with development teams, QA and IT to add continuous integration and continuous delivery pipelines to all projects in order to tighten feedback loops.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "C++ Engineer",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, automation, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you! At Telenav, we believe the car is at the beginning of a massive innovation wave that mirrors what happened on the smartphone several years ago. Telenav creates world-class connected, embedded and mobile software for the top world’s top automakers.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "C++ SDK Engineer",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smartphone, and cloud services? Can you imagine uniting those dreams with a product company that has the skills and relationships to make that a reality? If so, Telenav wants you.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "C++/QT Engineer for Automotive QNX",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smartphone, and cloud services? Can you imagine uniting those dreams with a product company that has the skills and relationships to make that a reality? If so, Telenav wants you. At Telenav, we believe the car is at the beginning of a massive innovation wave that mirrors what happened on the smartphone several years ago. Telenav creates world-class connected, embedded and mobile software for the world’s top automakers.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Data Compilation Program Manager",
        "Manage scheduling of end to end operational activities from data procurement to delivery for various programs.",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Data Scientist",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "DevOps Engineer",
        "At Telenav, we believe the car is at the beginning of a massive innovation wave that mirrors what happened on the smartphone several years ago. Building on our long history of mobile and in-car navigation software and services, we are on a mission to make people’s lives less stressful, more productive and more fun when they’re on the go.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Engineering Manager",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        2,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Image processing and Machine learning Engineer",
        "At Telenav, we believe the car is at the beginning of a massive innovation wave that mirrors what happened on the smartphone several years ago. Building on our long history of mobile and in-car navigation software and services, we are on a mission to make people’s lives less stressful, more productive and more fun when they’re on the go.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "iOS Software Engineer",
        "We are looking for an iOS Developer with a passion for pushing mobile technologies to the limits in the complex area of mapping products and navigation systems. You will work with a team of talented engineers to build the next generation of mobile applications in the Automotive industry.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Map Analyst",
        "We're looking for a map analyst with proven experience handling industry navigation data to drive our map data generation and quality assessments. You will work with a team of our map analysts, developers and product managers to build, validate and update our map data product always ensuring its highest quality.  The ideal candidate will be a passionate mapper and team player with strong communication skills.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Map Production Manager",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smart phone, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you!",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Navigation Architect",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Principal Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Project Manager",
        "As a Project Manager, you will be charged with creating, leading, designing and implementing the technical vision for innovative products and services across the organisation.  Working closely with Product Managers and Engineering Leads, you will leverage your deep knowledge in highly-scalable systems to design truly innovative mapping solutions while incorporating the agility and flexibility in the design to accommodate the rapid changes of the technology landscape.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior C/C++ Engineer",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, automation, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you! At Telenav, we believe the car is at the beginning of a massive innovation wave that mirrors what happened on the smartphone several years ago. Telenav creates world-class connected, embedded and mobile software for the top world’s top automakers.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior Developer - Incubation",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads.",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior Java Software Engineer",
        "Code daily using excellent coding habits, produce quality design documents, disciplined unit/integration testing and cultish commitment to code and process quality;",
        3,
        4
      )
    `);

    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior Map Analyst",
        "We're looking for a senior map analyst with proven experience handling industry navigation data to drive our map data generation and quality assessments. You will work with a team of our map analysts, developers and product managers to build, validate and update our map data product always ensuring its highest quality.  The ideal candidate will be a passionate mapper and team player with strong communication skills.",
        3,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior Software Engineer",
        "Experience and a love for developing rich user experience such as animations, customer UI components, and advanced gesture support on the Android platform",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Sr. Engineering Manager",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Staff Java Software Engineer",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smart phone, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you!",
        3,
        4
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Staff Software Engineer",
        "We are looking for a great HMI developer with Android experience to join our growing team!",
        3,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "System Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        3,
        1
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Technical Lead",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        3,
        2
      )
    `);

    // ===
    // ===
    // ===
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Helpdesk Support Specialist",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        4,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "NOC/Site Reliability Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        4,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Security Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        4,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Security Manager",
        "Telenav is looking for a motivated Information Security Manager to be a key player in our IT team. This team is responsible for protecting our infrastructure, applications, and data. This candidate will be particularly responsible for identifying new vulnerabilities and responding to existing vulnerabilities and requirements within the organization.",
        4,
        2
      )
    `);

    // ===
    // ===
    // ===
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "PR and Communications Manager",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        5,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Product Marketing Manager",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        5,
        2
      )
    `);

    // ===
    // ===
    // ===
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Product Manager MSK",
        "At Telenav, we believe the car is at the beginning of a massive innovation wave that mirrors what happened on the smartphone several years ago. Building on our long history of mobile and in-car navigation software and services, we are on a mission to make people’s lives less stressful, more productive and more fun when they’re on the go.",
        6,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior Product Manager",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smart phone, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you!",
        6,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Senior Product Manager",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, a smartphone, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you!",
        6,
        2
      )
    `);

    // ===
    // ===
    // ===
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Lead Software QA Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        7,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Manager QA Engineering",
        "Do you dream of what cars of the future will look like when you combine them with connectivity, automation, and cloud services? Can you imagine uniting those dreams with a company that has the skills and relationships to make that a reality? If so, Telenav wants you!",
        7,
        3
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Software Language Tester (Norwegian) - Temporary",
        "Knowledge of Norwegian-speaking regions of European as it relates to searching for places, maps and directions",
        7,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Software Language Tester (Swedish) - Temporary",
        "Perform localization testing of our auto navigation application, for the language Swedish",
        7,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Software Language Tester (Turkish) - Temporary",
        "Perform localization testing of our auto navigation application, for the language Turkish",
        7,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Software QA Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        7,
        2
      )
    `);
    db.run(`
      INSERT INTO jobs (title, content, career_type_id, career_location_id)
      VALUES (
        "Software QA Engineer",
        "Telenav is transforming life on the go for people — before, during, and after every drive. Leveraging our location platform, global brands such as Ford, GM, Toyota, and AT&T deliver custom connected car and mobile experiences. Additionally, advertisers such as Nissan, Denny's, Walmart, and Best Buy reach millions of users with our highly-targeted advertising platform. To learn more about how Telenav's location platform powers personalized navigation, mapping, big data intelligence, social driving, and location-based ads, visit www.telenav.com.",
        7,
        2
      )
    `);

  });
}