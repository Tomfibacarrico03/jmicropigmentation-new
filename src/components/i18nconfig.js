import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Quem Somos": "About Us",
        Serviços: "Services",
        Feedback: "Feedback",
        Contato: "Contact",
        Português: "Portuguese",
        English: "English",
        Español: "Spanish",
        OUR_SERVICES: "OUR SERVICES",
        HYPER_REALISTIC_MICROPIGMENTATION: "HYPER-REALISTIC MICROPIGMENTATION",
        SCALP_MICROPIGMENTATION: "SCALP MICROPIGMENTATION",
        SCALP_MICROPIGMENTATION_DESC:
          "Scalp micropigmentation is an innovative technique for applying pigments to the scalp, aiming to artistically simulate hair growth and correct the appearance of alopecia or baldness. The technique involves applying small amounts of pigment to the scalp to create the illusion of hair strands. The result is a more natural and uniform appearance, which can last from 4 to 8 years on average, with periodic touch-up sessions.",
        KNOW_MORE_EXAMPLES: "KNOW MORE EXAMPLES",
        FACIAL_MICROPIGMENTATION: "FACIAL MICROPIGMENTATION",
        FACIAL_MICROPIGMENTATION_DESC:
          "Facial micropigmentation is a technique for applying pigments to the skin, aiming to correct imperfections and enhance the natural beauty of the face. The technique can be used to correct flawed eyebrows, undefined lips, and expressionless eyes, offering a more lasting and natural result than conventional makeup. The result can last from 2 to 3 years on average, with periodic touch-up sessions.",
        MEDICAL_MICROPIGMENTATION_AREATA: "MEDICAL MICROPIGMENTATION AREATA",
        MEDICAL_MICROPIGMENTATION_AREATA_DESC:
          "Medical micropigmentation areata seeks to fill the lack of one or several hairless, usually round or oval, well-defined zones with visibly unchanged skin. Alopecia areata is an autoimmune dermatological disease characterized, most commonly, by localized areas of hair loss or fur, or bald spots, without follicle destruction.",
        MEDICAL_MICROPIGMENTATION_SCAR: "MEDICAL MICROPIGMENTATION SCAR",
        MEDICAL_MICROPIGMENTATION_SCAR_DESC:
          "Scar micropigmentation is a technique for applying pigments to the skin, aiming to camouflage scars caused by surgeries, accidents, or other injuries. The technique involves applying pigment to the scar area to create a more uniform and natural appearance. The result can last from 4 to 8 years on average, with periodic touch-up sessions. The technique can be used on various body areas, such as the face, scalp, breasts, among others.",
        KNOW_OUR_HISTORY: "KNOW OUR HISTORY",
        WHY_CHOOSE_US: "WHY CHOOSE US?",
        YEARS_OF_EXPERIENCE: "MORE THAN 8 YEARS OF EXPERIENCE",
        YEARS_OF_EXPERIENCE_DESC:
          "With more than 8 years of experience in the market of hyper-realistic scalp micropigmentation, JMicropigmentation offers its clients a quality and excellence service.",
        NATIONWIDE_SERVICE: "NATIONWIDE SERVICE",
        NATIONWIDE_SERVICE_DESC:
          "JMicropigmentation serves clients throughout the Portuguese territory, from north to south and islands, offering a high-quality service and convenience",
        INTERNATIONAL_CERTIFIED_EXPERIENCE:
          "INTERNATIONAL CERTIFIED EXPERIENCE",
        INTERNATIONAL_CERTIFIED_EXPERIENCE_DESC:
          "JMicropigmentation is a hyper-realistic scalp micropigmentation clinic that offers a differentiated internal experience. The team is composed of highly skilled and trained professionals, who work in an integrated manner to ensure a quality and excellence service",
        CONTACT_US: "CONTACT US",
        MY_EXPERIENCE_SPEAKS:
          "MY EXPERIENCE SPEAKS FOR ME. DON'T BE AFRAID TO CONTACT US, AND I WILL PERSONALLY RESPOND",
        dreamStart: "EVERYTHING STARTS WITH A DREAM",
        clinicDesc: "HYPER-REALISTIC MICROPIGMENTATION CLINIC",
        myStory: "MY STORY",
        storyText: `It started with an idea to help people suffering from any type of baldness. For this, I dedicated several years to studying various techniques in several countries around the world, in order to create a unique and personal methodology specialized in correcting and solving the problem of alopecia with the highest level of realism; which I defined as: "GRANULATED TECHNIQUE" by jmicropigmentation.
          
          With more than 8 years of experience being a pioneer of this technique, and with a vast number of satisfied clients, I managed to realize another dream: to open my own micropigmentation clinic in Lisbon! Since the opening, we have served more than 200 clients of various nationalities and travel several times a month to various cities in Portugal with the aim of serving clients in other regions.`,
        followUs: "FOLLOW OUR WORK ON SOCIAL NETWORKS",
        "MICROPIGMENTAÇÃO CAPILAR": "CAPILLARY MICROPIGMENTATION",
        "HIPER-REALISTA": "HYPER-REALISTIC",
        "Sabre mais": "Learn more",

        // What is it section
        "O QUE É": "WHAT IS IT",
        'MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA "GRANULADA"':
          "GRANULATED HYPER-REALISTIC CAPILLARY MICROPIGMENTATION",
        micropigmentationDescription:
          "Hyper-realistic capillary micropigmentation is an aesthetic procedure that uses differentiated tattoo techniques to simulate the appearance of hair on the scalp area with a unique three-dimensional effect; created and developed by us. The technique is carried out through the application of pigments on the skin, in a process that can take from one to three sessions, depending on the case and the patient's goal.",

        // Our Services
        "OS NOSSOS SERVIÇOS": "OUR SERVICES",
        MICROPIGMENTAÇÃO: "MICROPIGMENTATION",
        Capilar: "Capillary",
        capilarDescription:
          "Technique of applying pigments to the scalp to simulate hair growth, indicated for those suffering from alopecia or baldness.",
        FACIAL: "FACIAL",
        facialDescription:
          "Technique of applying pigments to the skin to correct imperfections, such as failed eyebrows, undefined lips, and expressionless eyes, offering a more lasting and natural result.",
        "PARAMÉDICA AREATA": "PARAMEDICAL AREATA",
        paramedicalAreataDescription:
          "Paramedical areata micropigmentation seeks to fill the lack of one or several hairless zones, usually round or oval, well defined and with visibly unchanged skin.",
        "PARAMÉDICA CICATRICIAL": "PARAMEDICAL CICATRICIAL",
        paramedicalCicatricialDescription:
          'Technique of applying pigments on the skin to camouflage scars caused by surgeries (hair transplant with the "FUT" or "FUE" technique), accidents, or other injuries, offering a more lasting and natural result.',

        // Feedback
        Antes: "BEFORE",
        Depois: "AFTER",
        FEEDBACK: "FEEDBACK",
        "GIL GONÇALVES": "GIL GONÇALVES",
        gilFeedback:
          "“Looking in the mirror and liking what we see has no price, but great value. Thank you jmicropigmentation for the wonderful artwork, for being part of my change, and for offering an excellent service;... Now my confidence and self-esteem are completely recovered”",
        "O NOSSO ESPAÇO": "OUR SPACE",
        // FAQ
        FAQ: "FAQ",
        conventionalVsHyperRealistic:
          "WHAT IS THE DIFFERENCE BETWEEN CONVENTIONAL CAPILLARY MICROPIGMENTATION AND HYPER-REALISTIC?",
        conventionalVsHyperRealisticAnswer:
          "Conventional capillary micropigmentation is a technique that seeks to imitate the appearance of hair strands through the application of small dots of pigment. Hyper-realistic capillary micropigmentation is a more advanced technique that seeks to simulate the texture, density, and color of the strands with even more precision, creating a more realistic and natural result.",
        howLongDoesItLast:
          "HOW LONG DOES HYPER-REALISTIC CAPILLARY MICROPIGMENTATION LAST?",
        howLongDoesItLastAnswer:
          "The durability of hyper-realistic capillary micropigmentation varies from person to person, lasting on average from 4 to 8 years. However, the final result can be affected by various factors, such as the quality of the pigments used, the technique employed, the patient's skin type, long-term care; among others. To maintain the pigmentation for longer, it is important to follow post-procedure care guidelines and perform periodic touch-up sessions (every 4 years).",
        CONTACTS: "CONTACTS",
        PHONE: "PHONE",
        EMAIL: "EMAIL",
        ADDRESS: "ADDRESS",
        YOUR_NAME: "YOUR NAME",
        YOUR_EMAIL: "YOUR EMAIL",
        YOUR_MESSAGE: "YOUR MESSAGE",
        SEND: "SEND",
        MAP_ADDRESS:
          "Rua Nova dos Mercadores nº 19 B, Parque das Nações | Lisbon.",
        PLACEHOLDER_NAME: "Ex: John Doe",
        PLACEHOLDER_EMAIL: "example@domain.com",
        PLACEHOLDER_MESSAGE: "Write here",
        JORGES_QUOTE:
          "“MY EXPERIENCE SPEAKS FOR ME. DON’T BE AFRAID, CONTACT US AND I WILL RESPOND TO YOU PERSONALLY”",
      },
    },
    pt: {
      translation: {
        JORGES_QUOTE:
          "“A MINHA EXPERIÊNCIA FALA POR MIM. NÃO TENHA MEDO ENTRE EM CONTATO CONNOSCO E RESPONDEREI-LHE PESSOALMENTE”",
        "Quem Somos": "Quem Somos",
        Serviços: "Serviços",
        Feedback: "Feedback",
        Contato: "Contato",
        Português: "Português",
        English: "Inglês",
        Español: "Espanhol",
        OUR_SERVICES: "OS NOSSOS SERVIÇOS",
        HYPER_REALISTIC_MICROPIGMENTATION: "MICROPIGMENTAÇÃO HIPER-REALISTA",
        SCALP_MICROPIGMENTATION: "MICROPIGMENTAÇÃO CAPILAR",
        SCALP_MICROPIGMENTATION_DESC:
          "A micropigmentação capilar é uma técnica inovadora de aplicação de pigmentos no couro cabeludo, com o objetivo de simular artisticamente o crescimento de cabelos e corrigir a aparência de alopecia ou calvície. A técnica envolve a aplicação de pequenas quantidades de pigmento no couro cabeludo para criar a ilusão de fios de cabelo. O resultado é uma aparência mais natural e uniforme, que pode durar de 4 a 8 anos em média, com sessões de retoque periódicas.",
        KNOW_MORE_EXAMPLES: "CONHEÇA MAIS EXEMPLOS",
        FACIAL_MICROPIGMENTATION: "MICROPIGMENTAÇÃO FACIAL",
        FACIAL_MICROPIGMENTATION_DESC:
          "A micropigmentação facial é uma técnica de aplicação de pigmentos na pele, com o objetivo de corrigir imperfeições e realçar a beleza natural do rosto. A técnica pode ser usada para corrigir sobrancelhas falhadas, lábios sem definição e olhos sem expressão, oferecendo um resultado mais duradouro e natural que a maquiagem convencional. O resultado pode durar de 2 a 3 anos em média, com sessões de retoque periódicas.",
        MEDICAL_MICROPIGMENTATION_AREATA: "MICROPIGMENTAÇÃO MÉDICA AREATA",
        MEDICAL_MICROPIGMENTATION_AREATA_DESC:
          "A micropigmentação médica areata busca preencher a falta de uma ou várias zonas sem cabelo, usualmente redondas ou ovais, bem definidas e com a pele sem alterações visíveis. A alopecia areata é uma doença dermatológica autoimune caracterizada, mais comumente, por áreas localizadas de perda de cabelo ou pelo, ou peladas, sem destruição dos folículos.",
        MEDICAL_MICROPIGMENTATION_SCAR: "MICROPIGMENTAÇÃO MÉDICA CICATRICIAL",
        MEDICAL_MICROPIGMENTATION_SCAR_DESC:
          "A micropigmentação cicatricial é uma técnica de aplicação de pigmentos na pele, com o objetivo de camuflar cicatrizes causadas por cirurgias, acidentes ou outras lesões. A técnica envolve aplicar pigmento na área da cicatriz para criar uma aparência mais uniforme e natural. O resultado pode durar de 4 a 8 anos em média, com sessões de retoque periódicas. A técnica pode ser usada em várias áreas do corpo, como rosto, couro cabeludo, seios, entre outros.",
        KNOW_OUR_HISTORY: "CONHEÇA A NOSSA HISTÓRIA",
        WHY_CHOOSE_US: "POR QUE ESCOLHER-NOS?",
        YEARS_OF_EXPERIENCE: "MAIS DE 8 ANOS DE EXPERIÊNCIA",
        YEARS_OF_EXPERIENCE_DESC:
          "Com mais de 8 anos de experiência no mercado de micropigmentação capilar hiper-realista, a JMicropigmentation oferece aos seus clientes um serviço de qualidade e excelência.",
        NATIONWIDE_SERVICE: "SERVIÇO EM TODO O TERRITÓRIO NACIONAL",
        NATIONWIDE_SERVICE_DESC:
          "A JMicropigmentation atende clientes em todo o território português, de norte a sul e ilhas, oferecendo um serviço de alta qualidade e comodidade.",
        INTERNATIONAL_CERTIFIED_EXPERIENCE:
          "EXPERIÊNCIA INTERNACIONAL CERTIFICADA",
        INTERNATIONAL_CERTIFIED_EXPERIENCE_DESC:
          "A JMicropigmentation é uma clínica de micropigmentação capilar hiper-realista que oferece uma experiência interna diferenciada. A equipe é composta por profissionais altamente capacitados e treinados, que trabalham de forma integrada para garantir um serviço de qualidade e excelência.",
        CONTACT_US: "CONTACTE-NOS",
        MY_EXPERIENCE_SPEAKS:
          "A MINHA EXPERIÊNCIA FALA POR MIM. NÃO TENHA MEDO DE NOS CONTACTAR, E EU RESPONDEREI PESSOALMENTE",
        dreamStart: "TUDO COMEÇA COM UM SONHO",
        clinicDesc: "CLÍNICA DE MICROPIGMENTAÇÃO HIPER-REALISTA",
        myStory: "A MINHA HISTÓRIA",
        storyText:
          "Começou com uma ideia de ajudar pessoas sofrendo de qualquer tipo de calvície. Para isso, dediquei vários anos ao estudo de várias técnicas em vários países do mundo, a fim de criar uma metodologia única e pessoal especializada em corrigir e resolver o problema da alopecia com o maior nível de realismo; que defini como: 'TÉCNICA GRANULADA' pela jmicropigmentation. Com mais de 8 anos de experiência sendo pioneiro desta técnica, e com um vasto número de clientes satisfeitos, consegui realizar outro sonho: abrir minha própria clínica de micropigmentação em Lisboa! Desde a abertura, atendemos mais de 200 clientes de várias nacionalidades e viajamos várias vezes por mês para várias cidades de Portugal com o objetivo de atender clientes em outras regiões.",
        followUs: "SIGA O NOSSO TRABALHO NAS REDES SOCIAIS",
        "MICROPIGMENTAÇÃO CAPILAR": "MICROPIGMENTAÇÃO CAPILAR",
        "HIPER-REALISTA": "HIPER-REALISTA",
        "Sabre mais": "Saiba mais",
        "O QUE É": "O QUE É",
        'MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA "GRANULADA"':
          "MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA 'GRANULADA'",
        micropigmentationDescription:
          "A micropigmentação capilar hiper-realista é um procedimento estético que utiliza técnicas diferenciadas de tatuagem para simular a aparência de cabelos na área do couro cabeludo com um efeito tridimensional único; criado e desenvolvido por nós. A técnica é realizada através da aplicação de pigmentos na pele, em um processo que pode levar de uma a três sessões, dependendo do caso e do objetivo do paciente.",
        "OS NOSSOS SERVIÇOS": "OS NOSSOS SERVIÇOS",
        MICROPIGMENTAÇÃO: "MICROPIGMENTAÇÃO",
        Capilar: "Capilar",
        capilarDescription:
          "Técnica de aplicação de pigmentos no couro cabeludo para simular o crescimento de cabelos, indicada para quem sofre de alopecia ou calvície.",
        FACIAL: "FACIAL",
        facialDescription:
          "Técnica de aplicação de pigmentos na pele para corrigir imperfeições, como sobrancelhas falhadas, lábios sem definição e olhos sem expressão, oferecendo um resultado mais duradouro e natural.",
        "PARAMÉDICA AREATA": "PARAMÉDICA AREATA",
        paramedicalAreataDescription:
          "A Micropigmentação paramédica areata busca preencher a falta de uma ou várias zonas sem cabelo, habitualmente redondas ou ovais, bem definidas e com a pele sem alterações visíveis.",
        "PARAMÉDICA CICATRICIAL": "PARAMÉDICA CICATRICIAL",
        paramedicalCicatricialDescription:
          "Técnica de aplicação de pigmentos na pele para camuflar cicatrizes causadas por cirurgias, acidentes ou outras lesões, oferecendo um resultado mais duradouro e natural.",
        "CONHECER MAIS": "CONHECER MAIS",
        Antes: "ANTES",
        Depois: "DEPOIS",
        FEEDBACK: "FEEDBACK",
        "GIL GONÇALVES": "GIL GONÇALVES",
        gilFeedback:
          "“Olhar ao espelho e gostar do que vemos, não tem preço, e sim muito valor. Obrigado jmicropigmentation pela maravilhosa obra de arte, por fazerem parte da minha mudança e por oferecerem um serviço de excelência;… Agora a minha confiança e auto-estima se encontra recuperada por completo”",
        "O NOSSO ESPAÇO": "O NOSSO ESPAÇO",
        FAQ: "FAQ",
        conventionalVsHyperRealistic:
          "QUAL É A DIFERENÇA ENTRE A MICROPIGMENTAÇÃO CAPILAR CONVENCIONAL E A HIPER-REALISTA?",
        conventionalVsHyperRealisticAnswer:
          "A micropigmentação capilar convencional é uma técnica que busca imitar a aparência de fios de cabelo através da aplicação de pequenos pontos de pigmento. A micropigmentação capilar hiper-realista é uma técnica mais avançada, que procura simular a textura, a densidade e a cor dos fios com ainda mais precisão, criando um resultado mais realista e natural.",
        howLongDoesItLast:
          "QUANTO TEMPO DURA A MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA?",
        howLongDoesItLastAnswer:
          "A durabilidade da micropigmentação capilar hiper-realista varia de pessoa para pessoa, podendo durar em média de 4 a 8 anos. No entanto, o resultado final pode ser afetado por diversos fatores, como a qualidade dos pigmentos utilizados, a técnica empregada, o tipo de pele do paciente, cuidados a longo prazo, entre outros. Para manter a pigmentação por mais tempo, é importante seguir as orientações de cuidado pós-procedimento e realizar sessões de retoque periodicamente (a cada 4 anos).",
        CONTACTS: "CONTACTOS",
        PHONE: "TELEFONE",
        EMAIL: "E-MAIL",
        ADDRESS: "MORADA",
        YOUR_NAME: "O SEU NOME",
        YOUR_EMAIL: "O SEU E-MAIL",
        YOUR_MESSAGE: "A SUA MENSAGEM",
        SEND: "ENVIAR",
        MAP_ADDRESS:
          "Rua Nova dos Mercadores nº 19 B, Parque das Nações | Lisboa.",
        PLACEHOLDER_NAME: "Ex: Miguel Estorninho",
        PLACEHOLDER_EMAIL: "geral@digitalnatives.pt",
        PLACEHOLDER_MESSAGE: "Escreva aqui",
      },
    },
    es: {
      translation: {
        JORGES_QUOTE:
          "“MI EXPERIENCIA HABLA POR MÍ. NO TENGAS MIEDO, CONTÁCTANOS Y TE RESPONDERÉ PERSONALMENTE”",
        "Quem Somos": "Quiénes Somos",
        Serviços: "Servicios",
        Feedback: "Retroalimentación",
        Contato: "Contacto",
        Português: "Portugués",
        English: "Inglés",
        Español: "Español",
        OUR_SERVICES: "NUESTROS SERVICIOS",
        HYPER_REALISTIC_MICROPIGMENTATION: "MICROPIGMENTACIÓN HIPER-REALISTA",
        SCALP_MICROPIGMENTATION: "MICROPIGMENTACIÓN CAPILAR",
        SCALP_MICROPIGMENTATION_DESC:
          "La micropigmentación capilar es una técnica innovadora para aplicar pigmentos en el cuero cabelludo, con el objetivo de simular artísticamente el crecimiento del cabello y corregir la apariencia de la alopecia o calvicie. La técnica implica aplicar pequeñas cantidades de pigmento en el cuero cabelludo para crear la ilusión de mechones de cabello. El resultado es una apariencia más natural y uniforme, que puede durar de 4 a 8 años en promedio, con sesiones de retoque periódicas.",
        KNOW_MORE_EXAMPLES: "CONOZCA MÁS EJEMPLOS",
        FACIAL_MICROPIGMENTATION: "MICROPIGMENTACIÓN FACIAL",
        FACIAL_MICROPIGMENTATION_DESC:
          "La micropigmentación facial es una técnica para aplicar pigmentos en la piel, con el objetivo de corregir imperfecciones y realzar la belleza natural del rostro. La técnica se puede utilizar para corregir cejas imperfectas, labios sin definición y ojos sin expresión, ofreciendo un resultado más duradero y natural que el maquillaje convencional. El resultado puede durar de 2 a 3 años en promedio, con sesiones de retoque periódicas.",
        MEDICAL_MICROPIGMENTATION_AREATA: "MICROPIGMENTACIÓN MÉDICA AREATA",
        MEDICAL_MICROPIGMENTATION_AREATA_DESC:
          "La micropigmentación médica areata busca llenar la falta de una o varias zonas sin cabello, usualmente redondas u ovales, bien definidas y con la piel sin cambios visibles. La alopecia areata es una enfermedad dermatológica autoinmune caracterizada, más comúnmente, por áreas localizadas de pérdida de cabello o pelo, o calvas, sin destrucción de los folículos.",
        MEDICAL_MICROPIGMENTATION_SCAR: "MICROPIGMENTACIÓN MÉDICA CICATRICIAL",
        MEDICAL_MICROPIGMENTATION_SCAR_DESC:
          "La micropigmentación cicatricial es una técnica para aplicar pigmentos en la piel, con el objetivo de camuflar cicatrices causadas por cirugías, accidentes u otras lesiones. La técnica implica aplicar pigmento en el área de la cicatriz para crear una apariencia más uniforme y natural. El resultado puede durar de 4 a 8 años en promedio, con sesiones de retoque periódicas. La técnica se puede utilizar en varias áreas del cuerpo, como la cara, cuero cabelludo, senos, entre otros.",
        KNOW_OUR_HISTORY: "CONOZCA NUESTRA HISTORIA",
        WHY_CHOOSE_US: "¿POR QUÉ ELEGIRNOS?",
        YEARS_OF_EXPERIENCE: "MÁS DE 8 AÑOS DE EXPERIENCIA",
        YEARS_OF_EXPERIENCE_DESC:
          "Con más de 8 años de experiencia en el mercado de la micropigmentación capilar hiper-realista, JMicropigmentation ofrece a sus clientes un servicio de calidad y excelencia.",
        NATIONWIDE_SERVICE: "SERVICIO A NIVEL NACIONAL",
        NATIONWIDE_SERVICE_DESC:
          "JMicropigmentation atiende a clientes en todo el territorio portugués, de norte a sur y en las islas, ofreciendo un servicio de alta calidad y comodidad.",
        INTERNATIONAL_CERTIFIED_EXPERIENCE:
          "EXPERIENCIA INTERNACIONAL CERTIFICADA",
        INTERNATIONAL_CERTIFIED_EXPERIENCE_DESC:
          "JMicropigmentation es una clínica de micropigmentación capilar hiper-realista que ofrece una experiencia interna diferenciada. El equipo está compuesto por profesionales altamente capacitados y entrenados, que trabajan de manera integrada para garantizar un servicio de calidad y excelencia.",
        CONTACT_US: "CONTÁCTANOS",
        MY_EXPERIENCE_SPEAKS:
          "MI EXPERIENCIA HABLA POR MÍ. NO TENGAS MIEDO DE CONTACTARNOS, Y YO RESPONDERÉ PERSONALMENTE",
        dreamStart: "TODO COMIENZA CON UN SUEÑO",
        clinicDesc: "CLÍNICA DE MICROPIGMENTACIÓN HIPER-REALISTA",
        myStory:"Mi historia",
        storyText:
          "Mi historia comenzó con la idea de ayudar a las personas que sufren de cualquier tipo de calvicie. Para ello, dediqué varios años al estudio de diversas técnicas en varios países del mundo, con el fin de crear una metodología única y personal especializada en corregir y solucionar el problema de la alopecia con el mayor nivel de realismo; lo que definí como: 'TÉCNICA GRANULADA' por JMicropigmentation. Con más de 8 años de experiencia siendo pionero de esta técnica, y con un gran número de clientes satisfechos, logré realizar otro sueño: abrir mi propia clínica de micropigmentación en Lisboa. Desde la apertura, hemos atendido a más de 200 clientes de diversas nacionalidades y viajamos varias veces al mes a diferentes ciudades de Portugal con el objetivo de atender a clientes en otras regiones.",
        followUs: "SIGUE NUESTRO TRABAJO EN LAS REDES SOCIALES",
        "MICROPIGMENTAÇÃO CAPILAR": "MICROPIGMENTACIÓN CAPILAR",
        "HIPER-REALISTA": "HIPER-REALISTA",
        "Sabre mais": "Saber más",
        "O QUE É": "QUÉ ES",
        'MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA "GRANULADA"':
          "MICROPIGMENTACIÓN CAPILAR HIPER-REALISTA 'GRANULADA'",
        micropigmentationDescription:
          "La micropigmentación capilar hiper-realista es un procedimiento estético que utiliza técnicas de tatuaje diferenciadas para simular la apariencia del cabello en el área del cuero cabelludo con un efecto tridimensional único; creado y desarrollado por nosotros. La técnica se lleva a cabo mediante la aplicación de pigmentos en la piel, en un proceso que puede llevar de una a tres sesiones, dependiendo del caso y del objetivo del paciente.",
        "OS NOSSOS SERVIÇOS": "NUESTROS SERVICIOS",
        MICROPIGMENTAÇÃO: "MICROPIGMENTACIÓN",
        Capilar: "Capilar",
        capilarDescription:
          "Técnica de aplicación de pigmentos en el cuero cabelludo para simular el crecimiento del cabello, indicada para quienes sufren de alopecia o calvicie.",
        FACIAL: "FACIAL",
        facialDescription:
          "Técnica de aplicación de pigmentos en la piel para corregir imperfecciones, como cejas imperfectas, labios sin definición y ojos sin expresión, ofreciendo un resultado más duradero y natural.",
        "PARAMÉDICA AREATA": "PARAMÉDICA AREATA",
        paramedicalAreataDescription:
          "La micropigmentación paramédica areata busca llenar la falta de una o varias zonas sin cabello, usualmente redondas u ovales, bien definidas y con la piel sin cambios visibles.",
        "PARAMÉDICA CICATRICIAL": "PARAMÉDICA CICATRICIAL",
        paramedicalCicatricialDescription:
          "Técnica de aplicación de pigmentos en la piel para camuflar cicatrices causadas por cirugías, accidentes u otras lesiones, ofreciendo un resultado más duradero y natural.",
        "CONHECER MAIS": "CONOCER MÁS",
        Antes: "ANTES",
        Depois: "DESPUÉS",
        FEEDBACK: "RETROALIMENTACIÓN",
        "GIL GONÇALVES": "GIL GONÇALVES",
        gilFeedback:
          "“Mirarse al espejo y gustarse lo que vemos no tiene precio, sino mucho valor. Gracias a jmicropigmentation por la maravillosa obra de arte, por ser parte de mi cambio y por ofrecer un servicio de excelencia;... Ahora mi confianza y autoestima están completamente recuperadas”",
        "O NOSSO ESPAÇO": "NUESTRO ESPACIO",
        FAQ: "PREGUNTAS FRECUENTES",
        conventionalVsHyperRealistic:
          "¿CUÁL ES LA DIFERENCIA ENTRE LA MICROPIGMENTACIÓN CAPILAR CONVENCIONAL Y LA HIPER-REALISTA?",
        conventionalVsHyperRealisticAnswer:
          "La micropigmentación capilar convencional es una técnica que busca imitar la apariencia de los mechones de cabello mediante la aplicación de pequeños puntos de pigmento. La micropigmentación capilar hiper-realista es una técnica más avanzada, que busca simular la textura, la densidad y el color de los mechones con aún más precisión, creando un resultado más realista y natural.",
        howLongDoesItLast:
          "¿CUÁNTO TIEMPO DURA LA MICROPIGMENTACIÓN CAPILAR HIPER-REALISTA?",
        howLongDoesItLastAnswer:
          "La durabilidad de la micropigmentación capilar hiper-realista varía de persona a persona, pudiendo durar en promedio de 4 a 8 años. Sin embargo, el resultado final puede verse afectado por varios factores, como la calidad de los pigmentos utilizados, la técnica empleada, el tipo de piel del paciente, cuidados a largo plazo, entre otros. Para mantener la pigmentación por más tiempo, es importante seguir las pautas de cuidado post-procedimiento y realizar sesiones de retoque periódicamente (cada 4 años).",
        CONTACTS: "CONTACTOS",
        PHONE: "TELÉFONO",
        EMAIL: "CORREO ELECTRÓNICO",
        ADDRESS: "DIRECCIÓN",
        YOUR_NAME: "SU NOMBRE",
        YOUR_EMAIL: "SU CORREO ELECTRÓNICO",
        YOUR_MESSAGE: "SU MENSAJE",
        SEND: "ENVIAR",
        MAP_ADDRESS:
          "Rua Nova dos Mercadores nº 19 B, Parque das Nações | Lisboa.",
        PLACEHOLDER_NAME: "Ej: Miguel Estorninho",
        PLACEHOLDER_EMAIL: "general@digitalnatives.pt",
        PLACEHOLDER_MESSAGE: "Escriba aquí",
      },
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
