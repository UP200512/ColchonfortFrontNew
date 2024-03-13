
export function NuevoArticulo() {
    return [
        {
            section: 'Información del producto',
            validate: 2,
            target: ['new'],
            questions: [
                {
                    title: 'Nombre del producto',
                    type: 'text',
                    name: 'nombre',
                    placeholder: "Nombre del nuevo producto"
                },
                {
                    title: 'Descripcion corta',
                    type: 'text',
                    name: 'desripcion_corta',
                    max: 100,
                    placeholder: "Escribe una pequeña descripción"
                },
                {
                    title: 'Descripción larga',
                    type: 'textarea',
                    name: 'desripcion_larga',
                    placeholder: "Aqui puedes extender las mejores caraterísticas del producto",
                    max: 500,
                },
                {
                    title: 'Categoría',
                    type: 'select',
                    name: 'categoria',
                    options: [
                        'Opción 1',
                        'Opción 2',
                        'Opción 3',
                        'Opción 4',
                    ],
                },

                {
                    title: 'Medidas disponibles',
                    type: 'table',
                    rows: [
                        {
                            title: '',
                            type: 'checkbox',
                            name: 'medidas.indi',
                            options: [
                                'Individual'
                            ]
                        },
                        {
                            title: '',
                            type: 'checkbox',
                            name: 'medidas.matri',
                            options: [
                                'Matrimonial'
                            ]
                        },
                        {
                            title: '',
                            type: 'checkbox',
                            name: 'medidas.queen',
                            options: [
                                'Queen Size'
                            ]
                        },
                        {
                            title: '',
                            type: 'checkbox',
                            name: 'medidas.king',
                            options: [
                                'king Size'
                            ]
                        },

                    ]
                },

                
                {
                    title: 'Individual: Precio REAL al consumidor',
                    placeholder: "Precio individual",
                    type: 'number',
                    name: 'precio.indi',
                    hideField: 'medidas.indi',
                    condition: true

                },
                {
                    title: 'Individual: Precio FALSO',
                    placeholder: "Precio anterior para reflejar promoción",
                    type: 'number',
                    name: 'precio_falso.indi',
                    hideField: 'medidas.indi',
                    condition: true

                },
                 {
                    title: 'Matrimonial: Precio REAL al consumidor',
                    placeholder: "Precio matrimonial",
                    type: 'number',
                    name: 'precio.matri',
                    hideField: 'medidas.matri',
                    condition: true
                }, 
                {
                    title: 'Matrimonial: Precio FALSO',
                    placeholder: "Precio anterior para reflejar promoción",
                    type: 'number',
                    name: 'precio_falso.matri',
                    hideField: 'medidas.matri',
                    condition: true

                },
                
                {
                    title: 'Queen Size: Precio REAL al consumidor',
                    placeholder: "Precio Queen Size",
                    type: 'number',
                    name: 'precio.queen',
                    hideField: 'medidas.queen',
                    condition: true
                }, 
                {
                    title: 'Queen Size: Precio FALSO',
                    placeholder: "Precio anterior para reflejar promoción",
                    type: 'number',
                    name: 'precio_falso.queen',
                    hideField: 'medidas.queen',
                    condition: true

                },
                {
                    title: 'King Size: Precio REAL al consumidor',
                    placeholder: "Precio King Size",
                    type: 'number',
                    name: 'precio.king',
                    hideField: 'medidas.king',
                    condition: true
                }, 
                {
                    title: 'King Size: Precio FALSO',
                    placeholder: "Precio anterior para reflejar promoción",
                    type: 'number',
                    name: 'precio_falso.king',
                    hideField: 'medidas.king',
                    condition: true

                },
                

            ]
        },

    ];
}



// function getCountries(){
//     return ["México","Afganistán","Albania","Alemania","Algeria","Andorra","Angola","Anguilla","Antigua y Barbuda","Antillas Holandesas","Arabia Saudita","Argentina","Armenia","Aruba","Australia","Austria","Azerbaiyán","Bahamas","Bahrein","Bangladesh","Barbados","Bélgica","Belice","Benín","Bermudas","Bielorrusia","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Chad","Chile","China","Chipre","Colombia","Comores","Congo (Brazzaville)","Congo (Kinshasa)","Cook, Islas","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Djibouti, Yibuti","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Feroe, Islas","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Gibraltar","Granada","Grecia","Groenlandia","Guadalupe","Guatemala","Guernsey","Guinea","Guinea Ecuatorial","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungría","India","Indonesia","Irak","Irán","Irlanda","Isla Pitcairn","Islandia","Islas Salomón","Islas Turcas y Caicos","Islas Virgenes Británicas","Israel","Italia","Jamaica","Japón","Jersey","Jordania","Kazajstán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesotho","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malawi","Maldivas","Malí","Malta","Man, Isla de","Marruecos","Martinica","Mauricio","Mauritania","México","Moldavia","Mónaco","Mongolia","Mozambique","Myanmar","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Norfolk Island","Noruega","Nueva Caledonia","Nueva Zelanda","Omán","Países Bajos, Holanda","Pakistán","Panamá","Papúa-Nueva Guinea","Paraguay","Perú","Polinesia Francesa","Polonia","Portugal","Puerto Rico","Qatar","Reino Unido","República Checa","República Dominicana","Reunión","Ruanda","Rumanía","Rusia","Sáhara Occidental","Samoa","San Cristobal y Nevis","San Marino","San Pedro y Miquelón","San Tomé y Príncipe","San Vincente y Granadinas","Santa Elena","Santa Lucía","Senegal","Serbia y Montenegro","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Sudáfrica","Sudán","Suecia","Suiza","Surinam","Swazilandia","Tadjikistan","Tailandia","Taiwan","Tanzania","Timor Oriental","Togo","Tokelau","Tonga","Trinidad y Tobago","Túnez","Turkmenistan","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Wallis y Futuna","Yemen","Zambia","Zimbabwe"]
// }
