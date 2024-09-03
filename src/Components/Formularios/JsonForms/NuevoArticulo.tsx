import { getCategoriaDelProducto } from "../../../axios/http";
// import { useState, useEffect } from "react";


export async function NuevoArticulo() {


    try {

        let categorias = await getCategoriaDelProducto();
        console.log(categorias);
        categorias = [...categorias, {
            idcategoria: 0,
            nombre: "Otra",
            descripcion: "Una nueva categoría"
        }]

        // Verificar si categorias es un array y tiene al menos un elemento
        if (Array.isArray(categorias) && categorias.length > 0) {


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
                            id: 'nombre',
                            placeholder: "Nombre del nuevo producto"
                        },
                        {
                            title: 'Descripcion corta',
                            type: 'text',
                            name: 'descripcion_corta',
                            id: 'descripcion_corta',
                            max: 100,
                            placeholder: "Escribe una pequeña descripción"
                        },
                        {
                            title: 'Descripción larga',
                            type: 'textarea',
                            name: 'descripcion_larga',
                            id: 'descripcion_larga',
                            placeholder: "Aqui puedes extender las mejores caraterísticas del producto",
                            max: 500
                        },
                        {
                            title: 'Categoría',
                            type: 'select',
                            name: 'idcategoria',
                            id: 'idcategoria',
                            options: categorias
                        },
                        {
                            title: 'Nueva Categoria',
                            type: 'text',
                            name: 'nueva_categoria',
                            id: 'nueva_categoria',
                            placeholder: "Escribe aquí",
                            max: 50,
                            hideField: 'idcategoria',
                            condition: '0'
                        },
                        {
                            title: 'Medidas disponibles',
                            type: 'table',
                            rows: [
                                {
                                    title: '',
                                    type: 'checkbox',
                                    name: 'medidas.indi',
                                    id: 'medidas_indi',
                                    options: ['Individual']
                                },
                                {
                                    title: '',
                                    type: 'checkbox',
                                    name: 'medidas.matri',
                                    id: 'medidas_matri',
                                    options: ['Matrimonial']
                                },
                                {
                                    title: '',
                                    type: 'checkbox',
                                    name: 'medidas.queen',
                                    id: 'medidas_queen',
                                    options: ['Queen Size']
                                },
                                {
                                    title: '',
                                    type: 'checkbox',
                                    name: 'medidas.king',
                                    id: 'medidas_king',
                                    options: ['King Size']
                                }
                            ]
                        },
                        {
                            title: 'Individual: Precio REAL al consumidor',
                            placeholder: "Precio individual",
                            type: 'number',
                            name: 'precio.indi',
                            id: 'precio_indi',
                            hideField: 'medidas.indi',
                            condition: true
                        },
                        {
                            title: 'Individual: Precio FALSO',
                            placeholder: "Precio anterior para reflejar promoción",
                            type: 'number',
                            name: 'precio_falso.indi',
                            id: 'precio_falso_indi',
                            hideField: 'medidas.indi',
                            condition: true
                        },
                        {
                            title: 'Matrimonial: Precio REAL al consumidor',
                            placeholder: "Precio matrimonial",
                            type: 'number',
                            name: 'precio.matri',
                            id: 'precio_matri',
                            hideField: 'medidas.matri',
                            condition: true
                        },
                        {
                            title: 'Matrimonial: Precio FALSO',
                            placeholder: "Precio anterior para reflejar promoción",
                            type: 'number',
                            name: 'precio_falso.matri',
                            id: 'precio_falso_matri',
                            hideField: 'medidas.matri',
                            condition: true
                        },
                        {
                            title: 'Queen Size: Precio REAL al consumidor',
                            placeholder: "Precio Queen Size",
                            type: 'number',
                            name: 'precio.queen',
                            id: 'precio_queen',
                            hideField: 'medidas.queen',
                            condition: true
                        },
                        {
                            title: 'Queen Size: Precio FALSO',
                            placeholder: "Precio anterior para reflejar promoción",
                            type: 'number',
                            name: 'precio_falso.queen',
                            id: 'precio_falso_queen',
                            hideField: 'medidas.queen',
                            condition: true
                        },
                        {
                            title: 'King Size: Precio REAL al consumidor',
                            placeholder: "Precio King Size",
                            type: 'number',
                            name: 'precio.king',
                            id: 'precio_king',
                            hideField: 'medidas.king',
                            condition: true
                        },
                        {
                            title: 'King Size: Precio FALSO',
                            placeholder: "Precio anterior para reflejar promoción",
                            type: 'number',
                            name: 'precio_falso.king',
                            id: 'precio_falso_king',
                            hideField: 'medidas.king',
                            condition: true
                        }
                    ]
                }
                

            ];
        } else {
            console.error('La lista de categorías está vacía o no es un array:', categorias);
        }
    } catch (error) {
        console.error('Error al obtener categorías:', error);
        // Manejo del error si es necesario
        return [];
    }
}
