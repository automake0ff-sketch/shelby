export const menuSourceUrl = 'https://menu.pikotea.com/#/ahJlfnBpa290ZWEtc2VydmVyLTJyFwsSClJlc3RhdXJhbnQYgICA1_26xAkM////RECOGER';

/**
 * Categorías oficiales extraídas del menú digital de Pikotea.
 */
export const menuCategories = [
  {
    "id": "cafe-te-iced-teas",
    "name": "CAFÉ, TÉ & ICED TEAS",
    "subcategories": [
      "Cafés Especiales",
      "Cafés Clásicos",
      "Chocolates",
      "Tés e Infusiones",
      "Iced Teas"
    ],
    "coverage": "complete"
  },
  {
    "id": "matchas-chais-milkshakes",
    "name": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategories": [
      "Matchas & Specialty Lattes",
      "Milkshakes & Batidos",
      "Chai Collection"
    ],
    "coverage": "complete"
  },
  {
    "id": "limonadas-zumos-naturales",
    "name": "LIMONADAS & ZUMOS NATURALES",
    "subcategories": [
      "Limonadas Artesanas",
      "Zumos Naturales"
    ],
    "coverage": "complete"
  },
  {
    "id": "margaritas-refrescos",
    "name": "MARGARITAS & REFRESCOS",
    "subcategories": [
      "Margaritas & Cócteles",
      "Refrescos & Aguas",
      "Cervezas"
    ],
    "coverage": "complete"
  },
  {
    "id": "salado-sandwiches-omelette",
    "name": "Salado (Sándwiches & Omelette)",
    "subcategories": [
      "Omelette & Brunch",
      "Bagels",
      "Sándwiches & Brioche",
      "Gofres Salados"
    ],
    "coverage": "complete"
  },
  {
    "id": "dulces-bowl-tortitas-gofres",
    "name": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategories": [
      "Tortitas & Pancakes",
      "Gofres",
      "Bowls Dulces"
    ],
    "coverage": "complete"
  },
  {
    "id": "tostadas-simples",
    "name": "Tostadas simples",
    "subcategories": [
      "Tostadas & Panes"
    ],
    "coverage": "complete"
  }
];

/**
 * Catálogo completo de productos oficiales de Shelbyville Café sincronizados desde Pikotea.
 */
export const menuProducts = [
  {
    "id": "cafe-te-iced-teas-pumpkin-spiced-latte",
    "name": "Pumpkin Spiced Latte",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Especiales",
    "description": "Delicioso café caliente o frío, con leche de avena especiada con aroma de calabaza. Endulzado con un toque de sirope de arce y coronado con canela.",
    "descriptionStatus": "complete",
    "price": 3.5,
    "image": "/images/products/pumpkin-spiced-latte.jpg",
    "variants": [
      {
        "id": "pumpkin-spiced-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pumpkin-spiced-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "pumpkin-spiced-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "pumpkin-spiced-latte-opt-0",
        "name": "¿Descafeinado?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pumpkin-spiced-latte-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "pumpkin-spiced-latte-opt-1",
        "name": "¿Te lo preparamos para llevar? (sólo para caliente)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pumpkin-spiced-latte-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Pumpkin Spiced Latte",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Especiales",
    "descripcion": "Delicioso café caliente o frío, con leche de avena especiada con aroma de calabaza. Endulzado con un toque de sirope de arce y coronado con canela.",
    "precio": 3.5,
    "imagen": "/images/products/pumpkin-spiced-latte.jpg",
    "variantes": [
      {
        "id": "pumpkin-spiced-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pumpkin-spiced-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "pumpkin-spiced-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "pumpkin-spiced-latte-opt-0",
        "name": "¿Descafeinado?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pumpkin-spiced-latte-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "pumpkin-spiced-latte-opt-1",
        "name": "¿Te lo preparamos para llevar? (sólo para caliente)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pumpkin-spiced-latte-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-cafe-solo",
    "name": "Café solo",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Just one coffee shot. For intense please choose Espresso. For long coffe kindly choose Largo",
    "descriptionStatus": "complete",
    "price": 1.4,
    "image": "/images/products/cafe-solo.jpg",
    "variants": [
      {
        "id": "cafe-solo-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-solo-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.4
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "cafe-solo-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-solo-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-opt-0-expresso",
            "name": "Expresso",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "cafe-solo-opt-0-largo-cafe",
            "name": "Largo Café",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-solo-opt-1",
        "name": "Si es para llevar, por favor marca TAKE AWAY",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-solo-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Café solo",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Just one coffee shot. For intense please choose Espresso. For long coffe kindly choose Largo",
    "precio": 1.4,
    "imagen": "/images/products/cafe-solo.jpg",
    "variantes": [
      {
        "id": "cafe-solo-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-solo-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.4
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "cafe-solo-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-solo-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-opt-0-expresso",
            "name": "Expresso",
            "priceDelta": 0
          },
          {
            "id": "cafe-solo-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "cafe-solo-opt-0-largo-cafe",
            "name": "Largo Café",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-solo-opt-1",
        "name": "Si es para llevar, por favor marca TAKE AWAY",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-solo-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-cafe-con-leche",
    "name": "Café con leche",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Por defecto lleva LECHE SIN LACTOSA",
    "descriptionStatus": "complete",
    "price": 1.6,
    "image": "/images/products/cafe-con-leche.jpg",
    "variants": [
      {
        "id": "cafe-con-leche-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-con-leche-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "cafe-con-leche-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "cafe-con-leche-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "cafe-con-leche-opt-0",
        "name": "Si lo quieres descafeinado, por favor márcalo",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-con-leche-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-con-leche-opt-1",
        "name": "Especificaciones (Puedes elegir más de una)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-con-leche-opt-1-avellanado",
            "name": "Avellanado",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-iced-latte",
            "name": "ICED LATTE",
            "priceDelta": 0.2
          },
          {
            "id": "cafe-con-leche-opt-1-largo-cafe",
            "name": "Largo Café",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-con-leche-opt-1-leche-fria",
            "name": "Leche fría",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-con-leche-opt-1-sin-espuma",
            "name": "Sin espuma",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-con-leche-opt-2",
        "name": "Si lo quieres para llevar, por favor márcalo",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-con-leche-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Café con leche",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Por defecto lleva LECHE SIN LACTOSA",
    "precio": 1.6,
    "imagen": "/images/products/cafe-con-leche.jpg",
    "variantes": [
      {
        "id": "cafe-con-leche-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-con-leche-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "cafe-con-leche-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "cafe-con-leche-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "cafe-con-leche-opt-0",
        "name": "Si lo quieres descafeinado, por favor márcalo",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-con-leche-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-con-leche-opt-1",
        "name": "Especificaciones (Puedes elegir más de una)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-con-leche-opt-1-avellanado",
            "name": "Avellanado",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-iced-latte",
            "name": "ICED LATTE",
            "priceDelta": 0.2
          },
          {
            "id": "cafe-con-leche-opt-1-largo-cafe",
            "name": "Largo Café",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-con-leche-opt-1-leche-fria",
            "name": "Leche fría",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-con-leche-opt-1-sin-espuma",
            "name": "Sin espuma",
            "priceDelta": 0
          },
          {
            "id": "cafe-con-leche-opt-1-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-con-leche-opt-2",
        "name": "Si lo quieres para llevar, por favor márcalo",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-con-leche-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-cafe-bombon",
    "name": "Café bombón",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Una carga de café y fresca leche condensada",
    "descriptionStatus": "complete",
    "price": 2,
    "image": "/images/products/cafe-bombon.jpg",
    "variants": [],
    "extras": [
      {
        "id": "cafe-bombon-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-bombon-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "cafe-bombon-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "cafe-bombon-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Café bombón",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Una carga de café y fresca leche condensada",
    "precio": 2,
    "imagen": "/images/products/cafe-bombon.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "cafe-bombon-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-bombon-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "cafe-bombon-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "cafe-bombon-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-cafe-americano",
    "name": "Café Americano",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "One black coffee made into lungo coffe with hot water",
    "descriptionStatus": "complete",
    "price": 1.4,
    "image": "/images/products/cafe-americano.jpg",
    "variants": [
      {
        "id": "cafe-americano-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-americano-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-americano-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-americano-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "cafe-americano-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "cafe-americano-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "cafe-americano-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-americano-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "cafe-americano-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "cafe-americano-opt-1",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-americano-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Café Americano",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "One black coffee made into lungo coffe with hot water",
    "precio": 1.4,
    "imagen": "/images/products/cafe-americano.jpg",
    "variantes": [
      {
        "id": "cafe-americano-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-americano-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-americano-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-americano-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "cafe-americano-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "cafe-americano-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "cafe-americano-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-americano-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "cafe-americano-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "cafe-americano-opt-1",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-americano-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-cafe-cortado",
    "name": "Café Cortado",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Por defecto lleva LECHE SIN LACTOSA",
    "descriptionStatus": "complete",
    "price": 1.5,
    "image": "/images/products/cafe-cortado.jpg",
    "variants": [
      {
        "id": "cafe-cortado-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-cortado-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "cafe-cortado-opt-0",
        "name": "¿Lo quieres descafeinado? Márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-cortado-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-cortado-opt-1",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-cortado-opt-1-fria",
            "name": ".FRÍA",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "cafe-cortado-opt-1-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-cortado-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche",
      "Pescado"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Café Cortado",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Por defecto lleva LECHE SIN LACTOSA",
    "precio": 1.5,
    "imagen": "/images/products/cafe-cortado.jpg",
    "variantes": [
      {
        "id": "cafe-cortado-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-cortado-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "cafe-cortado-opt-0",
        "name": "¿Lo quieres descafeinado? Márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-cortado-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-cortado-opt-1",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-cortado-opt-1-fria",
            "name": ".FRÍA",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "cafe-cortado-opt-1-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "cafe-cortado-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-cortado-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche",
      "Pescado"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-cafe-manchado",
    "name": "Café manchado",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Por defecto lleva LECHE SIN LACTOSA",
    "descriptionStatus": "complete",
    "price": 1.6,
    "image": "/images/products/cafe-manchado.jpg",
    "variants": [
      {
        "id": "cafe-manchado-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-manchado-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "cafe-manchado-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "cafe-manchado-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "cafe-manchado-opt-0",
        "name": "¿Lo quieres descafeinado? Márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-manchado-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-manchado-opt-1",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-manchado-opt-1-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-opt-1-iced-latte",
            "name": "ICED LATTE",
            "priceDelta": 0.2
          },
          {
            "id": "cafe-manchado-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-manchado-opt-1-leche-fria",
            "name": "Leche fría",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-manchado-opt-1-sin-espuma",
            "name": "Sin espuma",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-opt-1-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-manchado-opt-2",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-manchado-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Café manchado",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Por defecto lleva LECHE SIN LACTOSA",
    "precio": 1.6,
    "imagen": "/images/products/cafe-manchado.jpg",
    "variantes": [
      {
        "id": "cafe-manchado-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "cafe-manchado-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "cafe-manchado-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "cafe-manchado-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "cafe-manchado-opt-0",
        "name": "¿Lo quieres descafeinado? Márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-manchado-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-manchado-opt-1",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-manchado-opt-1-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-opt-1-iced-latte",
            "name": "ICED LATTE",
            "priceDelta": 0.2
          },
          {
            "id": "cafe-manchado-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-manchado-opt-1-leche-fria",
            "name": "Leche fría",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "cafe-manchado-opt-1-sin-espuma",
            "name": "Sin espuma",
            "priceDelta": 0
          },
          {
            "id": "cafe-manchado-opt-1-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "cafe-manchado-opt-2",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "cafe-manchado-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-chocolate-a-la-taza",
    "name": "Chocolate a la taza",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Chocolates",
    "description": "100% cacao criollo belga, preparado en leche sin lactosa",
    "descriptionStatus": "complete",
    "price": 3.8,
    "image": "/images/products/chocolate-a-la-taza.jpg",
    "variants": [],
    "extras": [
      {
        "id": "chocolate-a-la-taza-opt-0",
        "name": "Hazlo suizo aqui",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chocolate-a-la-taza-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "chocolate-a-la-taza-opt-1",
        "name": "¿Es para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chocolate-a-la-taza-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Chocolate a la taza",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Chocolates",
    "descripcion": "100% cacao criollo belga, preparado en leche sin lactosa",
    "precio": 3.8,
    "imagen": "/images/products/chocolate-a-la-taza.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "chocolate-a-la-taza-opt-0",
        "name": "Hazlo suizo aqui",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chocolate-a-la-taza-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "chocolate-a-la-taza-opt-1",
        "name": "¿Es para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chocolate-a-la-taza-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-vaso-leche",
    "name": "Vaso Leche",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.9,
    "image": "/images/products/vaso-leche.jpg",
    "variants": [
      {
        "id": "vaso-leche-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "vaso-leche-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "vaso-leche-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "vaso-leche-opt-0",
        "name": "Si prefieres bebida vegetal, elígela aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaso-leche-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "vaso-leche-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Vaso Leche",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": null,
    "precio": 1.9,
    "imagen": "/images/products/vaso-leche.jpg",
    "variantes": [
      {
        "id": "vaso-leche-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "vaso-leche-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "vaso-leche-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "vaso-leche-opt-0",
        "name": "Si prefieres bebida vegetal, elígela aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaso-leche-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "vaso-leche-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-descafeinado-de-sobre",
    "name": "Descafeinado de Sobre",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Por defecto lleva LECHE SIN LACTOSA",
    "descriptionStatus": "complete",
    "price": 1.6,
    "image": "/images/products/descafeinado-de-sobre.jpg",
    "variants": [
      {
        "id": "descafeinado-de-sobre-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "descafeinado-de-sobre-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "descafeinado-de-sobre-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "descafeinado-de-sobre-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "descafeinado-de-sobre-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "descafeinado-de-sobre-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "descafeinado-de-sobre-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "descafeinado-de-sobre-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "descafeinado-de-sobre-opt-0-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "descafeinado-de-sobre-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "descafeinado-de-sobre-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "descafeinado-de-sobre-opt-0-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "descafeinado-de-sobre-opt-1",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "descafeinado-de-sobre-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Descafeinado de Sobre",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Por defecto lleva LECHE SIN LACTOSA",
    "precio": 1.6,
    "imagen": "/images/products/descafeinado-de-sobre.jpg",
    "variantes": [
      {
        "id": "descafeinado-de-sobre-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "descafeinado-de-sobre-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "descafeinado-de-sobre-fmt-pequeno-vaso",
            "name": "Pequeño (vaso)",
            "priceDelta": 0
          },
          {
            "id": "descafeinado-de-sobre-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0.3
          },
          {
            "id": "descafeinado-de-sobre-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.5
          },
          {
            "id": "descafeinado-de-sobre-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "descafeinado-de-sobre-opt-0",
        "name": "Especificaciones",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "descafeinado-de-sobre-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "descafeinado-de-sobre-opt-0-hirviendo",
            "name": "Hirviendo",
            "priceDelta": 0
          },
          {
            "id": "descafeinado-de-sobre-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "descafeinado-de-sobre-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "descafeinado-de-sobre-opt-0-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "descafeinado-de-sobre-opt-1",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "descafeinado-de-sobre-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-capuccino",
    "name": "Capuccino",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Por defecto lleva LECHE SIN LACTOSA",
    "descriptionStatus": "complete",
    "price": 3,
    "image": "/images/products/capuccino.jpg",
    "variants": [
      {
        "id": "capuccino-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "capuccino-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0
          },
          {
            "id": "capuccino-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.4
          },
          {
            "id": "capuccino-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.1
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "capuccino-opt-0",
        "name": "¿BEBIDA VEGETAL?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "capuccino-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "capuccino-opt-1",
        "name": "SABORES (Opcional)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-1-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "capuccino-opt-1-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "capuccino-opt-1-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "capuccino-opt-2",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "capuccino-opt-3",
        "name": "Si lo quieres descafeinado, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-3-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Capuccino",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Por defecto lleva LECHE SIN LACTOSA",
    "precio": 3,
    "imagen": "/images/products/capuccino.jpg",
    "variantes": [
      {
        "id": "capuccino-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "capuccino-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0
          },
          {
            "id": "capuccino-fmt-grande-1-carga",
            "name": "Grande (1 carga)",
            "priceDelta": 0.4
          },
          {
            "id": "capuccino-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.1
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "capuccino-opt-0",
        "name": "¿BEBIDA VEGETAL?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "capuccino-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "capuccino-opt-1",
        "name": "SABORES (Opcional)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-1-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "capuccino-opt-1-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "capuccino-opt-1-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "capuccino-opt-1-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "capuccino-opt-1-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "capuccino-opt-2",
        "name": "Si lo quieres para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "capuccino-opt-3",
        "name": "Si lo quieres descafeinado, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "capuccino-opt-3-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-affogato",
    "name": "Affogato",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": "Copa de helado de Vainilla (se puede cambiar por otro sabor) y café expresso.",
    "descriptionStatus": "complete",
    "price": 3.5,
    "image": "/images/products/affogato.jpg",
    "variants": [],
    "extras": [
      {
        "id": "affogato-opt-0",
        "name": "Sabor del helado",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "affogato-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "affogato-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "affogato-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          }
        ]
      },
      {
        "id": "affogato-opt-1",
        "name": "Si lo quieres descafeinado y/o para llevar  márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "affogato-opt-1-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "affogato-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Affogato",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": "Copa de helado de Vainilla (se puede cambiar por otro sabor) y café expresso.",
    "precio": 3.5,
    "imagen": "/images/products/affogato.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "affogato-opt-0",
        "name": "Sabor del helado",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "affogato-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "affogato-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "affogato-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          }
        ]
      },
      {
        "id": "affogato-opt-1",
        "name": "Si lo quieres descafeinado y/o para llevar  márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "affogato-opt-1-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          },
          {
            "id": "affogato-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-rooibos-vainilla",
    "name": "Rooibos Vainilla ",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.9,
    "image": "/images/products/rooibos-vainilla.jpg",
    "variants": [
      {
        "id": "rooibos-vainilla-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "rooibos-vainilla-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-vainilla-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "rooibos-vainilla-opt-0",
        "name": "Extras",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "rooibos-vainilla-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-fria",
            "name": "Leche fría",
            "priceDelta": 0
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "rooibos-vainilla-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Rooibos Vainilla ",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": null,
    "precio": 1.9,
    "imagen": "/images/products/rooibos-vainilla.jpg",
    "variantes": [
      {
        "id": "rooibos-vainilla-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "rooibos-vainilla-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-vainilla-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "rooibos-vainilla-opt-0",
        "name": "Extras",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "rooibos-vainilla-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-fria",
            "name": "Leche fría",
            "priceDelta": 0
          },
          {
            "id": "rooibos-vainilla-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "rooibos-vainilla-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-te-verde",
    "name": "Té Verde ",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": "Popular té verde procedente de China, con un suave aroma y toque ligeramente picante.",
    "descriptionStatus": "complete",
    "price": 1.9,
    "image": "/images/products/te-verde.jpg",
    "variants": [
      {
        "id": "te-verde-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-verde-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-verde-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "te-verde-opt-0",
        "name": "¿Alguna especificación?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-verde-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-verde-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-verde-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-verde-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "te-verde-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Té Verde ",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": "Popular té verde procedente de China, con un suave aroma y toque ligeramente picante.",
    "precio": 1.9,
    "imagen": "/images/products/te-verde.jpg",
    "variantes": [
      {
        "id": "te-verde-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-verde-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-verde-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "te-verde-opt-0",
        "name": "¿Alguna especificación?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-verde-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-verde-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-verde-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-verde-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "te-verde-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-te-rojo",
    "name": "Té Rojo ",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": "De color oscuro, con notas afrutadas y sabor acentuado, es un té indicado para diversas ocasiones",
    "descriptionStatus": "complete",
    "price": 1.9,
    "image": "/images/products/te-rojo.jpg",
    "variants": [
      {
        "id": "te-rojo-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-rojo-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-rojo-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "te-rojo-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-rojo-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-rojo-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-rojo-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "te-rojo-opt-1",
        "name": "Si lo deseas para llevar y/o con hielo, por favor márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-rojo-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-rojo-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Té Rojo ",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": "De color oscuro, con notas afrutadas y sabor acentuado, es un té indicado para diversas ocasiones",
    "precio": 1.9,
    "imagen": "/images/products/te-rojo.jpg",
    "variantes": [
      {
        "id": "te-rojo-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-rojo-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-rojo-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "te-rojo-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-rojo-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-rojo-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-rojo-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "te-rojo-opt-1",
        "name": "Si lo deseas para llevar y/o con hielo, por favor márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-rojo-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-rojo-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-te-tila",
    "name": "Té Tila",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.9,
    "image": "/images/products/te-tila.jpg",
    "variants": [
      {
        "id": "te-tila-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-tila-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-tila-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "te-tila-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-tila-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-tila-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-tila-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-tila-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "te-tila-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Té Tila",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": null,
    "precio": 1.9,
    "imagen": "/images/products/te-tila.jpg",
    "variantes": [
      {
        "id": "te-tila-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-tila-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-tila-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "te-tila-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-tila-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-tila-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-tila-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-tila-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "te-tila-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-te-negro-canela",
    "name": "Té Negro Canela",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": "Combinación de intenso y característico té negro con el aroma dulce y suave de canela",
    "descriptionStatus": "complete",
    "price": 1.9,
    "image": "/images/products/te-negro-canela.jpg",
    "variants": [
      {
        "id": "te-negro-canela-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-negro-canela-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-canela-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "te-negro-canela-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-canela-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-canela-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-negro-canela-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "te-negro-canela-opt-1",
        "name": "Si lo quieres frío y/o para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-canela-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-negro-canela-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Té Negro Canela",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": "Combinación de intenso y característico té negro con el aroma dulce y suave de canela",
    "precio": 1.9,
    "imagen": "/images/products/te-negro-canela.jpg",
    "variantes": [
      {
        "id": "te-negro-canela-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-negro-canela-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-canela-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "te-negro-canela-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-canela-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-canela-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-negro-canela-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "te-negro-canela-opt-1",
        "name": "Si lo quieres frío y/o para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-canela-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-negro-canela-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-te-negro-earl-grey",
    "name": "Té Negro Earl Grey",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": "El clásico de los clásicos, una mezcla de té negro y un suave aceite de bergamota, que se traduce en un sabor exquisito y relajante.",
    "descriptionStatus": "complete",
    "price": 1.9,
    "image": "/images/products/te-negro-earl-grey.jpg",
    "variants": [
      {
        "id": "te-negro-earl-grey-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-negro-earl-grey-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-earl-grey-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "te-negro-earl-grey-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-earl-grey-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-earl-grey-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-negro-earl-grey-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "te-negro-earl-grey-opt-1",
        "name": "Si lo quieres para llevar y/o frío, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-earl-grey-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-negro-earl-grey-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Té Negro Earl Grey",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": "El clásico de los clásicos, una mezcla de té negro y un suave aceite de bergamota, que se traduce en un sabor exquisito y relajante.",
    "precio": 1.9,
    "imagen": "/images/products/te-negro-earl-grey.jpg",
    "variantes": [
      {
        "id": "te-negro-earl-grey-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "te-negro-earl-grey-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-earl-grey-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "te-negro-earl-grey-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-earl-grey-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "te-negro-earl-grey-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "te-negro-earl-grey-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "te-negro-earl-grey-opt-1",
        "name": "Si lo quieres para llevar y/o frío, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "te-negro-earl-grey-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "te-negro-earl-grey-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-infusion-f-bosque",
    "name": "Infusión F.Bosque",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": "Una compleja y agradable mezcla de frutos de fuerte aroma e intenso color, que causan una explosión de sabores",
    "descriptionStatus": "complete",
    "price": 1.9,
    "image": "/images/products/infusion-f-bosque.jpg",
    "variants": [
      {
        "id": "infusion-f-bosque-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "infusion-f-bosque-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "infusion-f-bosque-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "infusion-f-bosque-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-f-bosque-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "infusion-f-bosque-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-f-bosque-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "infusion-f-bosque-opt-1",
        "name": "Si lo quieres con hielo y/o para llevar, márcalo",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-f-bosque-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "infusion-f-bosque-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Frutos secos"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Infusión F.Bosque",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": "Una compleja y agradable mezcla de frutos de fuerte aroma e intenso color, que causan una explosión de sabores",
    "precio": 1.9,
    "imagen": "/images/products/infusion-f-bosque.jpg",
    "variantes": [
      {
        "id": "infusion-f-bosque-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "infusion-f-bosque-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "infusion-f-bosque-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "infusion-f-bosque-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-f-bosque-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "infusion-f-bosque-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-f-bosque-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "infusion-f-bosque-opt-1",
        "name": "Si lo quieres con hielo y/o para llevar, márcalo",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-f-bosque-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "infusion-f-bosque-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Frutos secos"
    ],
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-infusion-manzanilla",
    "name": "Infusión Manzanilla",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.9,
    "image": "/images/products/infusion-manzanilla.jpg",
    "variants": [
      {
        "id": "infusion-manzanilla-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "infusion-manzanilla-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "infusion-manzanilla-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "infusion-manzanilla-opt-0",
        "name": "Extra",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-manzanilla-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "infusion-manzanilla-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "infusion-manzanilla-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-manzanilla-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-manzanilla-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Infusión Manzanilla",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": null,
    "precio": 1.9,
    "imagen": "/images/products/infusion-manzanilla.jpg",
    "variantes": [
      {
        "id": "infusion-manzanilla-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "infusion-manzanilla-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "infusion-manzanilla-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "infusion-manzanilla-opt-0",
        "name": "Extra",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-manzanilla-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "infusion-manzanilla-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "infusion-manzanilla-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-manzanilla-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-manzanilla-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-infusion-menta",
    "name": "Infusión Menta",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.9,
    "image": "/images/products/infusion-menta.jpg",
    "variants": [
      {
        "id": "infusion-menta-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "infusion-menta-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "infusion-menta-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "infusion-menta-opt-0",
        "name": "Extra",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-menta-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "infusion-menta-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "infusion-menta-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-menta-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-menta-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Infusión Menta",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": null,
    "precio": 1.9,
    "imagen": "/images/products/infusion-menta.jpg",
    "variantes": [
      {
        "id": "infusion-menta-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "infusion-menta-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "infusion-menta-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "infusion-menta-opt-0",
        "name": "Extra",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "infusion-menta-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "infusion-menta-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "infusion-menta-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-menta-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          },
          {
            "id": "infusion-menta-opt-0-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-iced-matcha-menta",
    "name": "Iced Matcha Menta",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Cafés Clásicos",
    "description": null,
    "descriptionStatus": "none",
    "price": 3.5,
    "image": "/images/products/iced-matcha-menta.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Iced Matcha Menta",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Cafés Clásicos",
    "descripcion": null,
    "precio": 3.5,
    "imagen": "/images/products/iced-matcha-menta.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-iced-tea-acerola",
    "name": "Iced Tea Acerola",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Iced Teas",
    "description": null,
    "descriptionStatus": "none",
    "price": 3,
    "image": "/images/products/iced-tea-acerola.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Iced Tea Acerola",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Iced Teas",
    "descripcion": null,
    "precio": 3,
    "imagen": "/images/products/iced-tea-acerola.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-iced-tea-jengibre",
    "name": "Iced Tea Jengibre",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Iced Teas",
    "description": null,
    "descriptionStatus": "none",
    "price": 3.1,
    "image": "/images/products/iced-tea-jengibre.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Iced Tea Jengibre",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Iced Teas",
    "descripcion": null,
    "precio": 3.1,
    "imagen": "/images/products/iced-tea-jengibre.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-rooibos-frambuesa",
    "name": "Rooibos Frambuesa ",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Tés e Infusiones",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.9,
    "image": "/images/products/rooibos-frambuesa.jpg",
    "variants": [
      {
        "id": "rooibos-frambuesa-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "rooibos-frambuesa-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-frambuesa-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "rooibos-frambuesa-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "rooibos-frambuesa-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-frambuesa-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "rooibos-frambuesa-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "rooibos-frambuesa-opt-1",
        "name": "Si te apetece con hielo y/o para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "rooibos-frambuesa-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "rooibos-frambuesa-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Rooibos Frambuesa ",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Tés e Infusiones",
    "descripcion": null,
    "precio": 1.9,
    "imagen": "/images/products/rooibos-frambuesa.jpg",
    "variantes": [
      {
        "id": "rooibos-frambuesa-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "rooibos-frambuesa-fmt-pequeno-taza",
            "name": "Pequeño (taza)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-frambuesa-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "rooibos-frambuesa-opt-0",
        "name": "¿Añadir leche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "rooibos-frambuesa-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "rooibos-frambuesa-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "rooibos-frambuesa-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "rooibos-frambuesa-opt-1",
        "name": "Si te apetece con hielo y/o para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "rooibos-frambuesa-opt-1-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          },
          {
            "id": "rooibos-frambuesa-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-iced-tea-melocoton",
    "name": "Iced tea Melocoton",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Iced Teas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.9,
    "image": "/images/products/iced-tea-melocoton.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Iced tea Melocoton",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Iced Teas",
    "descripcion": null,
    "precio": 2.9,
    "imagen": "/images/products/iced-tea-melocoton.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-iced-tea-limon",
    "name": "Iced tea Limon",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Iced Teas",
    "description": null,
    "descriptionStatus": "none",
    "price": 3,
    "image": "/images/products/iced-tea-limon.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": true,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Iced tea Limon",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Iced Teas",
    "descripcion": null,
    "precio": 3,
    "imagen": "/images/products/iced-tea-limon.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "cafe-te-iced-teas-colacao",
    "name": "Colacao",
    "category": "CAFÉ, TÉ & ICED TEAS",
    "subcategory": "Chocolates",
    "description": "Por defecto con leche sin lactosa",
    "descriptionStatus": "complete",
    "price": 2,
    "image": "/images/products/colacao.jpg",
    "variants": [
      {
        "id": "colacao-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "colacao-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0
          },
          {
            "id": "colacao-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "colacao-opt-0",
        "name": "¿Quieres cambiar la leche por bebida vegetal?",
        "required": false,
        "multiple": false,
        "choices": [
          {
            "id": "colacao-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "colacao-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "colacao-opt-1",
        "name": "Temperatura y preparación",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "colacao-opt-1-caliente",
            "name": ".Caliente",
            "priceDelta": 0
          },
          {
            "id": "colacao-opt-1-frio-batido",
            "name": "Frío (batido)",
            "priceDelta": 0.5
          },
          {
            "id": "colacao-opt-1-frio-s-batir",
            "name": "Frío s/batir",
            "priceDelta": 0
          },
          {
            "id": "colacao-opt-1-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "colacao-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "colacao-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Colacao",
    "categoria": "CAFÉ, TÉ & ICED TEAS",
    "subcategoria": "Chocolates",
    "descripcion": "Por defecto con leche sin lactosa",
    "precio": 2,
    "imagen": "/images/products/colacao.jpg",
    "variantes": [
      {
        "id": "colacao-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "colacao-fmt-mediano",
            "name": "Mediano",
            "priceDelta": 0
          },
          {
            "id": "colacao-fmt-grande-doble-carga",
            "name": "Grande (doble carga)",
            "priceDelta": 1.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "colacao-opt-0",
        "name": "¿Quieres cambiar la leche por bebida vegetal?",
        "required": false,
        "multiple": false,
        "choices": [
          {
            "id": "colacao-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "colacao-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "colacao-opt-1",
        "name": "Temperatura y preparación",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "colacao-opt-1-caliente",
            "name": ".Caliente",
            "priceDelta": 0
          },
          {
            "id": "colacao-opt-1-frio-batido",
            "name": "Frío (batido)",
            "priceDelta": 0.5
          },
          {
            "id": "colacao-opt-1-frio-s-batir",
            "name": "Frío s/batir",
            "priceDelta": 0
          },
          {
            "id": "colacao-opt-1-templado",
            "name": "Templado",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "colacao-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "colacao-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-pumpkin-matcha-spiced-latte",
    "name": "Pumpkin  Matcha Spiced Latte",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Delicioso matcha caliente o frío, con leche de avena especiada con aroma de calabaza. Endulzado con un toque de sirope de arce y coronado con canela.",
    "descriptionStatus": "complete",
    "price": 4,
    "image": "/images/products/pumpkin-matcha-spiced-latte.jpg",
    "variants": [
      {
        "id": "pumpkin-matcha-spiced-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pumpkin-matcha-spiced-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "pumpkin-matcha-spiced-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Pumpkin  Matcha Spiced Latte",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Delicioso matcha caliente o frío, con leche de avena especiada con aroma de calabaza. Endulzado con un toque de sirope de arce y coronado con canela.",
    "precio": 4,
    "imagen": "/images/products/pumpkin-matcha-spiced-latte.jpg",
    "variantes": [
      {
        "id": "pumpkin-matcha-spiced-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pumpkin-matcha-spiced-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "pumpkin-matcha-spiced-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-ube-latte",
    "name": "Ube Latte",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Bebida a base de leche, aromatizada con polvo de ube, el ñame violeta filipino. Es una bebida cremosa, ligeramente dulce, sin cafeína y de un color violeta-lavanda intenso. Puede servirse caliente, frío con hielo, o enriquecido con un shot de espresso en la versión llamada dirty ube latte.",
    "descriptionStatus": "complete",
    "price": 3.45,
    "image": "/images/products/ube-latte.jpg",
    "variants": [
      {
        "id": "ube-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "ube-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "ube-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "ube-latte-opt-0",
        "name": "¿Algo de cafeína para tu bebida?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "ube-latte-opt-0-cafe",
            "name": "Café",
            "priceDelta": 1.4
          },
          {
            "id": "ube-latte-opt-0-matcha",
            "name": "Matcha",
            "priceDelta": 1.5
          }
        ]
      },
      {
        "id": "ube-latte-opt-1",
        "name": "Si prefieres una bebida vegetal, márcanosla aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "ube-latte-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "ube-latte-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "ube-latte-opt-2",
        "name": "Si quieres endulzar tu bebida con Vainilla (recomendado) marca aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "ube-latte-opt-2-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": true,
      "vegan": false
    },
    "available": true,
    "badge": "Vegetariano",
    "nombre": "Ube Latte",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Bebida a base de leche, aromatizada con polvo de ube, el ñame violeta filipino. Es una bebida cremosa, ligeramente dulce, sin cafeína y de un color violeta-lavanda intenso. Puede servirse caliente, frío con hielo, o enriquecido con un shot de espresso en la versión llamada dirty ube latte.",
    "precio": 3.45,
    "imagen": "/images/products/ube-latte.jpg",
    "variantes": [
      {
        "id": "ube-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "ube-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "ube-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "ube-latte-opt-0",
        "name": "¿Algo de cafeína para tu bebida?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "ube-latte-opt-0-cafe",
            "name": "Café",
            "priceDelta": 1.4
          },
          {
            "id": "ube-latte-opt-0-matcha",
            "name": "Matcha",
            "priceDelta": 1.5
          }
        ]
      },
      {
        "id": "ube-latte-opt-1",
        "name": "Si prefieres una bebida vegetal, márcanosla aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "ube-latte-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "ube-latte-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "ube-latte-opt-2",
        "name": "Si quieres endulzar tu bebida con Vainilla (recomendado) marca aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "ube-latte-opt-2-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-coco-matcha-iced-latte",
    "name": "Coco Matcha Iced Latte",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Bebida fría que combina leche (o bebida vegetal) con matcha 100% natural y delicioso coco para endulzar",
    "descriptionStatus": "complete",
    "price": 4.9,
    "image": "/images/products/coco-matcha-iced-latte.jpg",
    "variants": [],
    "extras": [
      {
        "id": "coco-matcha-iced-latte-opt-0",
        "name": "Bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "coco-matcha-iced-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "coco-matcha-iced-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Coco Matcha Iced Latte",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Bebida fría que combina leche (o bebida vegetal) con matcha 100% natural y delicioso coco para endulzar",
    "precio": 4.9,
    "imagen": "/images/products/coco-matcha-iced-latte.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "coco-matcha-iced-latte-opt-0",
        "name": "Bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "coco-matcha-iced-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "coco-matcha-iced-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-mango-matcha-iced-latte",
    "name": "Mango Matcha Iced Latte",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Bebida fría que combina leche (o bebida vegetal) con matcha 100% natural y delicioso mango para endulzar.",
    "descriptionStatus": "complete",
    "price": 4.9,
    "image": "/images/products/mango-matcha-iced-latte.jpg",
    "variants": [],
    "extras": [
      {
        "id": "mango-matcha-iced-latte-opt-0",
        "name": "¿Prefieres bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mango-matcha-iced-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "mango-matcha-iced-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Mango Matcha Iced Latte",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Bebida fría que combina leche (o bebida vegetal) con matcha 100% natural y delicioso mango para endulzar.",
    "precio": 4.9,
    "imagen": "/images/products/mango-matcha-iced-latte.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "mango-matcha-iced-latte-opt-0",
        "name": "¿Prefieres bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mango-matcha-iced-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "mango-matcha-iced-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-berrylicious-shake",
    "name": "BERRYLICIOUS SHAKE",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Batido de arándanos y mango hecho con leche sin lactosa",
    "descriptionStatus": "complete",
    "price": 4.7,
    "image": "/images/products/berrylicious-shake.jpg",
    "variants": [],
    "extras": [
      {
        "id": "berrylicious-shake-opt-0",
        "name": "¿Prefieres con bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "berrylicious-shake-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "berrylicious-shake-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "berrylicious-shake-opt-1",
        "name": "¿Coronamos con nata?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "berrylicious-shake-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "BERRYLICIOUS SHAKE",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Batido de arándanos y mango hecho con leche sin lactosa",
    "precio": 4.7,
    "imagen": "/images/products/berrylicious-shake.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "berrylicious-shake-opt-0",
        "name": "¿Prefieres con bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "berrylicious-shake-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "berrylicious-shake-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "berrylicious-shake-opt-1",
        "name": "¿Coronamos con nata?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "berrylicious-shake-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-chai-shake",
    "name": "CHAI SHAKE",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Chai Collection",
    "description": "Batido helado de Chai Latte. Base de helado de Vainilla.\n",
    "descriptionStatus": "complete",
    "price": 4.8,
    "image": "/images/products/chai-shake.jpg",
    "variants": [],
    "extras": [
      {
        "id": "chai-shake-opt-0",
        "name": "¿Prefieres bebida vegetal? (Helado contiene lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-shake-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-shake-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "chai-shake-opt-1",
        "name": "¿Un poco de nata por encima?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-shake-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "CHAI SHAKE",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Chai Collection",
    "descripcion": "Batido helado de Chai Latte. Base de helado de Vainilla.\n",
    "precio": 4.8,
    "imagen": "/images/products/chai-shake.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "chai-shake-opt-0",
        "name": "¿Prefieres bebida vegetal? (Helado contiene lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-shake-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-shake-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "chai-shake-opt-1",
        "name": "¿Un poco de nata por encima?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-shake-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-shake-galletas",
    "name": "SHAKE GALLETAS",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "¡Elige tu galleta para el Shake! (+0.6€)",
    "descriptionStatus": "complete",
    "price": 3.9,
    "image": "/images/products/shake-galletas.jpg",
    "variants": [],
    "extras": [
      {
        "id": "shake-galletas-opt-0",
        "name": "Elige tu galleta",
        "required": true,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-0-dino",
            "name": "Dino",
            "priceDelta": 0.8
          },
          {
            "id": "shake-galletas-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-tosta-rica",
            "name": "Topping Tosta Rica",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "shake-galletas-opt-1",
        "name": "¿Coronamos con nata?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "shake-galletas-opt-2",
        "name": "Si en lugar de vainilla, quieres otro sabor de base:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-2-cambio-mi-base-por-chocolate",
            "name": "Cambio mi base por chocolate",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "shake-galletas-opt-3",
        "name": "¿Le añadimos café a tu batido de galletas?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-3-cafe-en-mi-batido",
            "name": "Café en mi batido",
            "priceDelta": 1.4
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Frutos secos",
      "Leche",
      "Semillas de sésamo"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "SHAKE GALLETAS",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "¡Elige tu galleta para el Shake! (+0.6€)",
    "precio": 3.9,
    "imagen": "/images/products/shake-galletas.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "shake-galletas-opt-0",
        "name": "Elige tu galleta",
        "required": true,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-0-dino",
            "name": "Dino",
            "priceDelta": 0.8
          },
          {
            "id": "shake-galletas-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          },
          {
            "id": "shake-galletas-opt-0-topping-tosta-rica",
            "name": "Topping Tosta Rica",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "shake-galletas-opt-1",
        "name": "¿Coronamos con nata?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "shake-galletas-opt-2",
        "name": "Si en lugar de vainilla, quieres otro sabor de base:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-2-cambio-mi-base-por-chocolate",
            "name": "Cambio mi base por chocolate",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "shake-galletas-opt-3",
        "name": "¿Le añadimos café a tu batido de galletas?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-galletas-opt-3-cafe-en-mi-batido",
            "name": "Café en mi batido",
            "priceDelta": 1.4
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Frutos secos",
      "Leche",
      "Semillas de sésamo"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-shake-coffee",
    "name": "Shake Coffee",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Batido helado con base de vainilla y café 100% natural.",
    "descriptionStatus": "complete",
    "price": 4.4,
    "image": "/images/products/shake-coffee.jpg",
    "variants": [],
    "extras": [
      {
        "id": "shake-coffee-opt-0",
        "name": "¿Lo deseas DECAFF? Márcanoslo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-coffee-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "shake-coffee-opt-1",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-coffee-opt-1-dino",
            "name": "Dino",
            "priceDelta": 0.8
          },
          {
            "id": "shake-coffee-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "shake-coffee-opt-1-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "shake-coffee-opt-2",
        "name": "¿Bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-coffee-opt-2-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-coffee-opt-2-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Shake Coffee",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Batido helado con base de vainilla y café 100% natural.",
    "precio": 4.4,
    "imagen": "/images/products/shake-coffee.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "shake-coffee-opt-0",
        "name": "¿Lo deseas DECAFF? Márcanoslo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-coffee-opt-0-descafeinado",
            "name": "DESCAFEINADO",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "shake-coffee-opt-1",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-coffee-opt-1-dino",
            "name": "Dino",
            "priceDelta": 0.8
          },
          {
            "id": "shake-coffee-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "shake-coffee-opt-1-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "shake-coffee-opt-2",
        "name": "¿Bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-coffee-opt-2-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-coffee-opt-2-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-shake-nutella",
    "name": "Shake Nutella",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Batido helado con base de vainilla y Nutella original. ¡Añade nata por encima +0.5€!",
    "descriptionStatus": "complete",
    "price": 4.7,
    "image": "/images/products/shake-nutella.jpg",
    "variants": [],
    "extras": [
      {
        "id": "shake-nutella-opt-0",
        "name": "¿Prefieres bebida vegetal? (Helado con lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-nutella-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-nutella-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "shake-nutella-opt-1",
        "name": "¿Un poco de nata por encima?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-nutella-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Shake Nutella",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Batido helado con base de vainilla y Nutella original. ¡Añade nata por encima +0.5€!",
    "precio": 4.7,
    "imagen": "/images/products/shake-nutella.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "shake-nutella-opt-0",
        "name": "¿Prefieres bebida vegetal? (Helado con lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-nutella-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-nutella-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "shake-nutella-opt-1",
        "name": "¿Un poco de nata por encima?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-nutella-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-mr-banana-shake",
    "name": "Mr. Banana Shake",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Batido helado con base de vainilla, plátano y sirope de caramelo salado.",
    "descriptionStatus": "complete",
    "price": 4.9,
    "image": "/images/products/mr-banana-shake.jpg",
    "variants": [],
    "extras": [
      {
        "id": "mr-banana-shake-opt-0",
        "name": "¿Prefieres bebida vegetal? (Helado contiene lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mr-banana-shake-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "mr-banana-shake-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "mr-banana-shake-opt-1",
        "name": "¿Coronamos con nata?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mr-banana-shake-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Mr. Banana Shake",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Batido helado con base de vainilla, plátano y sirope de caramelo salado.",
    "precio": 4.9,
    "imagen": "/images/products/mr-banana-shake.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "mr-banana-shake-opt-0",
        "name": "¿Prefieres bebida vegetal? (Helado contiene lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mr-banana-shake-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "mr-banana-shake-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "mr-banana-shake-opt-1",
        "name": "¿Coronamos con nata?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mr-banana-shake-opt-1-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-shake-simple",
    "name": "Shake Simple",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Batido helado de un solo sabor a elegir. ¡Añade nata por encima +0.5€!",
    "descriptionStatus": "complete",
    "price": 3.7,
    "image": "/images/products/shake-simple.jpg",
    "variants": [],
    "extras": [
      {
        "id": "shake-simple-opt-0",
        "name": "SABOR",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "shake-simple-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "shake-simple-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "shake-simple-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          }
        ]
      },
      {
        "id": "shake-simple-opt-1",
        "name": "¿Prefieres bebida vegetal? (Helado contiene lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-simple-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-simple-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "shake-simple-opt-2",
        "name": "¿Te apetece nata por encima?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-simple-opt-2-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Shake Simple",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Batido helado de un solo sabor a elegir. ¡Añade nata por encima +0.5€!",
    "precio": 3.7,
    "imagen": "/images/products/shake-simple.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "shake-simple-opt-0",
        "name": "SABOR",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "shake-simple-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "shake-simple-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "shake-simple-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          }
        ]
      },
      {
        "id": "shake-simple-opt-1",
        "name": "¿Prefieres bebida vegetal? (Helado contiene lactosa)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-simple-opt-1-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-simple-opt-1-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      },
      {
        "id": "shake-simple-opt-2",
        "name": "¿Te apetece nata por encima?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-simple-opt-2-nata",
            "name": "Nata",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-chai-latte",
    "name": "CHAI LATTE ",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Chai Collection",
    "description": "Té negro con canela, clavo, anís, cardamomo y jengibre, combinado con leche emulsionada.\nPara tomarlo en frío, selecciona la opción ICED LATTE más abajo.",
    "descriptionStatus": "complete",
    "price": 3.5,
    "image": "/images/products/chai-latte.jpg",
    "variants": [
      {
        "id": "chai-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "chai-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "chai-latte-opt-0",
        "name": "Elige tu bebida de base",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-latte-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "CHAI LATTE ",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Chai Collection",
    "descripcion": "Té negro con canela, clavo, anís, cardamomo y jengibre, combinado con leche emulsionada.\nPara tomarlo en frío, selecciona la opción ICED LATTE más abajo.",
    "precio": 3.5,
    "imagen": "/images/products/chai-latte.jpg",
    "variantes": [
      {
        "id": "chai-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "chai-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "chai-latte-opt-0",
        "name": "Elige tu bebida de base",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-latte-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-chai-latte-vainilla",
    "name": "CHAI LATTE VAINILLA",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Chai Collection",
    "description": "Té negro con suave sabor a vainilla, canela y clavo, combinado con leche emulsionada.\nPara tomarlo en frío, selecciona la opción ICED LATTE más abajo.",
    "descriptionStatus": "complete",
    "price": 3.6,
    "image": "/images/products/chai-latte-vainilla.jpg",
    "variants": [
      {
        "id": "chai-latte-vainilla-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "chai-latte-vainilla-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-vainilla-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.4
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "chai-latte-vainilla-opt-0",
        "name": "Elige tu bebida de base",
        "required": true,
        "multiple": true,
        "choices": [
          {
            "id": "chai-latte-vainilla-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-vainilla-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-latte-vainilla-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "CHAI LATTE VAINILLA",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Chai Collection",
    "descripcion": "Té negro con suave sabor a vainilla, canela y clavo, combinado con leche emulsionada.\nPara tomarlo en frío, selecciona la opción ICED LATTE más abajo.",
    "precio": 3.6,
    "imagen": "/images/products/chai-latte-vainilla.jpg",
    "variantes": [
      {
        "id": "chai-latte-vainilla-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "chai-latte-vainilla-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-vainilla-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.4
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "chai-latte-vainilla-opt-0",
        "name": "Elige tu bebida de base",
        "required": true,
        "multiple": true,
        "choices": [
          {
            "id": "chai-latte-vainilla-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "chai-latte-vainilla-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-latte-vainilla-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-chai-matcha-latte",
    "name": "CHAI MATCHA LATTE",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Chai Collection",
    "description": "Té verde Matcha típico de Japón mezclado con las especias más tradicionales del Chai, combinado con leche emulsionada. ¡Un verdadero viaje sensorial!\nPara tomarlo en frío, selecciona la opción ICED LATTE más abajo.",
    "descriptionStatus": "complete",
    "price": 3.8,
    "image": "/images/products/chai-matcha-latte.jpg",
    "variants": [
      {
        "id": "chai-matcha-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "chai-matcha-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "chai-matcha-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "chai-matcha-latte-opt-0",
        "name": "Elige tu bebida de base",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-matcha-latte-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "chai-matcha-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-matcha-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "CHAI MATCHA LATTE",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Chai Collection",
    "descripcion": "Té verde Matcha típico de Japón mezclado con las especias más tradicionales del Chai, combinado con leche emulsionada. ¡Un verdadero viaje sensorial!\nPara tomarlo en frío, selecciona la opción ICED LATTE más abajo.",
    "precio": 3.8,
    "imagen": "/images/products/chai-matcha-latte.jpg",
    "variantes": [
      {
        "id": "chai-matcha-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "chai-matcha-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "chai-matcha-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "chai-matcha-latte-opt-0",
        "name": "Elige tu bebida de base",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "chai-matcha-latte-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "chai-matcha-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "chai-matcha-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": [
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-iced-matcha-zumo-naranja",
    "name": "Iced Matcha Zumo Naranja",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Té matcha natural, mezclado con zumo de naranja recién exprimido",
    "descriptionStatus": "complete",
    "price": 4,
    "image": "/images/products/iced-matcha-zumo-naranja.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Iced Matcha Zumo Naranja",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Té matcha natural, mezclado con zumo de naranja recién exprimido",
    "precio": 4,
    "imagen": "/images/products/iced-matcha-zumo-naranja.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-matcha-latte",
    "name": "Matcha Latte",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": null,
    "descriptionStatus": "none",
    "price": 3.8,
    "image": "/images/products/matcha-latte.jpg",
    "variants": [
      {
        "id": "matcha-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "matcha-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "matcha-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "matcha-latte-opt-0",
        "name": "Bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "matcha-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "matcha-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Matcha Latte",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": null,
    "precio": 3.8,
    "imagen": "/images/products/matcha-latte.jpg",
    "variantes": [
      {
        "id": "matcha-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "matcha-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "matcha-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 0.2
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "matcha-latte-opt-0",
        "name": "Bebida vegetal?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "matcha-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "matcha-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-batido-de-frutas-a-elegir",
    "name": "Batido de frutas a elegir",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Batido que hacemos para ti con lecha y la fruta que elijas. No lleva helado. ¡Añade nata por encima +0.5€!",
    "descriptionStatus": "complete",
    "price": 3.5,
    "image": "/images/products/batido-de-frutas-a-elegir.jpg",
    "variants": [],
    "extras": [
      {
        "id": "batido-de-frutas-a-elegir-opt-0",
        "name": "1ª Fruta",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "batido-de-frutas-a-elegir-opt-0-fresa",
            "name": ".Fresa",
            "priceDelta": 0
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-mango",
            "name": ".Mango",
            "priceDelta": 0
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-naranja",
            "name": ".Naranja",
            "priceDelta": 0.7
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-pina",
            "name": ".Piña",
            "priceDelta": 0
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-platano",
            "name": ".Plátano ",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "batido-de-frutas-a-elegir-opt-1",
        "name": "Extras",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-coco",
            "name": "Extra coco",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-maracuya",
            "name": "Extra Maracuyá",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "batido-de-frutas-a-elegir-opt-2",
        "name": "Si deseas que lo hagamos con bebida vegetal, marca aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "batido-de-frutas-a-elegir-opt-2-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-2-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Batido de frutas a elegir",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Batido que hacemos para ti con lecha y la fruta que elijas. No lleva helado. ¡Añade nata por encima +0.5€!",
    "precio": 3.5,
    "imagen": "/images/products/batido-de-frutas-a-elegir.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "batido-de-frutas-a-elegir-opt-0",
        "name": "1ª Fruta",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "batido-de-frutas-a-elegir-opt-0-fresa",
            "name": ".Fresa",
            "priceDelta": 0
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-mango",
            "name": ".Mango",
            "priceDelta": 0
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-naranja",
            "name": ".Naranja",
            "priceDelta": 0.7
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-pina",
            "name": ".Piña",
            "priceDelta": 0
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-0-platano",
            "name": ".Plátano ",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "batido-de-frutas-a-elegir-opt-1",
        "name": "Extras",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-coco",
            "name": "Extra coco",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-maracuya",
            "name": "Extra Maracuyá",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "batido-de-frutas-a-elegir-opt-2",
        "name": "Si deseas que lo hagamos con bebida vegetal, marca aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "batido-de-frutas-a-elegir-opt-2-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "batido-de-frutas-a-elegir-opt-2-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-pink-milk",
    "name": "Pink Milk",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Base de leche o bebida vegetal, con remolacha, maca, açai, granada, jengibre y un poco de cúrcuma. ",
    "descriptionStatus": "complete",
    "price": 3,
    "image": "/images/products/pink-milk.jpg",
    "variants": [
      {
        "id": "pink-milk-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pink-milk-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "pink-milk-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 1
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "pink-milk-opt-0",
        "name": "¿Qué tipo de bebida prefieres?",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pink-milk-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "pink-milk-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "pink-milk-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Pink Milk",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Base de leche o bebida vegetal, con remolacha, maca, açai, granada, jengibre y un poco de cúrcuma. ",
    "precio": 3,
    "imagen": "/images/products/pink-milk.jpg",
    "variantes": [
      {
        "id": "pink-milk-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pink-milk-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "pink-milk-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 1
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "pink-milk-opt-0",
        "name": "¿Qué tipo de bebida prefieres?",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pink-milk-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "pink-milk-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "pink-milk-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-shake-wazowski",
    "name": "Shake Wazowski",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Milkshakes & Batidos",
    "description": "Cremoso y fresquito, este batido combina el aguacate con el mango para darte un sabor excepcional... ¡No te vas a arrepentir!",
    "descriptionStatus": "complete",
    "price": 4.8,
    "image": "/images/products/shake-wazowski.jpg",
    "variants": [],
    "extras": [
      {
        "id": "shake-wazowski-opt-0",
        "name": "Si prefieres que lo preparemos con bebida vegetal:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-wazowski-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-wazowski-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Shake Wazowski",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Milkshakes & Batidos",
    "descripcion": "Cremoso y fresquito, este batido combina el aguacate con el mango para darte un sabor excepcional... ¡No te vas a arrepentir!",
    "precio": 4.8,
    "imagen": "/images/products/shake-wazowski.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "shake-wazowski-opt-0",
        "name": "Si prefieres que lo preparemos con bebida vegetal:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shake-wazowski-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "shake-wazowski-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "matchas-chais-milkshakes-golden-latte",
    "name": "Golden Latte",
    "category": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategory": "Matchas & Specialty Lattes",
    "description": "Cúrcuma, especias y bebida de tu elección. Antiinflamatorio, suave y especiado.",
    "descriptionStatus": "complete",
    "price": 3,
    "image": "/images/products/golden-latte.jpg",
    "variants": [
      {
        "id": "golden-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "golden-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "golden-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 1
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "golden-latte-opt-0",
        "name": "Elige tu bebida de base",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "golden-latte-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "golden-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "golden-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Golden Latte",
    "categoria": "MATCHAS, CHAIS & MILKSHAKES",
    "subcategoria": "Matchas & Specialty Lattes",
    "descripcion": "Cúrcuma, especias y bebida de tu elección. Antiinflamatorio, suave y especiado.",
    "precio": 3,
    "imagen": "/images/products/golden-latte.jpg",
    "variantes": [
      {
        "id": "golden-latte-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "golden-latte-fmt-caliente",
            "name": "Caliente",
            "priceDelta": 0
          },
          {
            "id": "golden-latte-fmt-frio-iced-latte",
            "name": "Frío (Iced Latte)",
            "priceDelta": 1
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "golden-latte-opt-0",
        "name": "Elige tu bebida de base",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "golden-latte-opt-0-leche-sin-lactosa",
            "name": "Leche (sin lactosa)",
            "priceDelta": 0
          },
          {
            "id": "golden-latte-opt-0-leche-avena",
            "name": "Leche AVENA",
            "priceDelta": 0.35
          },
          {
            "id": "golden-latte-opt-0-leche-soja",
            "name": "Leche SOJA",
            "priceDelta": 0.35
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-limonada-clasica",
    "name": "Limonada Clásica",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Limonadas Artesanas",
    "description": "Limonada artesana en su versión más auténtica",
    "descriptionStatus": "complete",
    "price": 3.1,
    "image": "/images/products/limonada-clasica.jpg",
    "variants": [],
    "extras": [
      {
        "id": "limonada-clasica-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-clasica-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-clasica-opt-1",
        "name": "Si la deseas para llevar, por favor márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-clasica-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Limonada Clásica",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Limonadas Artesanas",
    "descripcion": "Limonada artesana en su versión más auténtica",
    "precio": 3.1,
    "imagen": "/images/products/limonada-clasica.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "limonada-clasica-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-clasica-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-clasica-opt-1",
        "name": "Si la deseas para llevar, por favor márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-clasica-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-limonada-fresa",
    "name": "Limonada Fresa",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Limonadas Artesanas",
    "description": "Limonada artesana, elaborada con fresas naturales.",
    "descriptionStatus": "complete",
    "price": 3.7,
    "image": "/images/products/limonada-fresa.jpg",
    "variants": [],
    "extras": [
      {
        "id": "limonada-fresa-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-fresa-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-fresa-opt-1",
        "name": "Si quieres añadir una segunda fruta, márcala aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-fresa-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-fresa-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "limonada-fresa-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-fresa-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-fresa-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-fresa-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Limonada Fresa",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Limonadas Artesanas",
    "descripcion": "Limonada artesana, elaborada con fresas naturales.",
    "precio": 3.7,
    "imagen": "/images/products/limonada-fresa.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "limonada-fresa-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-fresa-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-fresa-opt-1",
        "name": "Si quieres añadir una segunda fruta, márcala aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-fresa-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-fresa-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "limonada-fresa-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-fresa-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-fresa-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-fresa-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-limonada-mango",
    "name": "Limonada Mango",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Limonadas Artesanas",
    "description": "Limonada artesana, elaborada con mango natural",
    "descriptionStatus": "complete",
    "price": 3.7,
    "image": "/images/products/limonada-mango.jpg",
    "variants": [],
    "extras": [
      {
        "id": "limonada-mango-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-mango-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-mango-opt-1",
        "name": "Si quieres añadir una segunda fruta, por favor márcala aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-mango-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-mango-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "limonada-mango-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "limonada-mango-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-mango-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-mango-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-mango-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Limonada Mango",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Limonadas Artesanas",
    "descripcion": "Limonada artesana, elaborada con mango natural",
    "precio": 3.7,
    "imagen": "/images/products/limonada-mango.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "limonada-mango-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-mango-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-mango-opt-1",
        "name": "Si quieres añadir una segunda fruta, por favor márcala aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-mango-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-mango-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "limonada-mango-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "limonada-mango-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-mango-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-mango-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-mango-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-limonada-pina",
    "name": "Limonada Piña",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Limonadas Artesanas",
    "description": "Limnonada artesana elaborada con piña natural",
    "descriptionStatus": "complete",
    "price": 3.7,
    "image": "/images/products/limonada-pina.jpg",
    "variants": [],
    "extras": [
      {
        "id": "limonada-pina-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-pina-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-pina-opt-1",
        "name": "Si te apetece añadir una segunda fruta, márcala aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-pina-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-pina-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "limonada-pina-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "limonada-pina-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-pina-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-pina-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-pina-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Limonada Piña",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Limonadas Artesanas",
    "descripcion": "Limnonada artesana elaborada con piña natural",
    "precio": 3.7,
    "imagen": "/images/products/limonada-pina.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "limonada-pina-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-pina-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "limonada-pina-opt-1",
        "name": "Si te apetece añadir una segunda fruta, márcala aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "limonada-pina-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-pina-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "limonada-pina-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "limonada-pina-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-pina-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "limonada-pina-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "limonada-pina-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-zumo-grande-otras-frutas",
    "name": "Zumo Grande (otras frutas)",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Zumos Naturales",
    "description": "350 mL Zumo 100% natural de la fruta que elijas",
    "descriptionStatus": "complete",
    "price": 3.5,
    "image": "/images/products/zumo-grande-otras-frutas.jpg",
    "variants": [],
    "extras": [
      {
        "id": "zumo-grande-otras-frutas-opt-0",
        "name": "Fruta",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "zumo-grande-otras-frutas-opt-0-fresa",
            "name": ".Fresa",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-kiwi",
            "name": ".kiwi",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-mango",
            "name": ".Mango",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-papaya",
            "name": ".Papaya",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-pina",
            "name": ".Piña",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-platano",
            "name": ".Plátano ",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "zumo-grande-otras-frutas-opt-1",
        "name": "¿Quieres una segunda fruta?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "zumo-grande-otras-frutas-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-coco",
            "name": "Extra coco",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-maracuya",
            "name": "Extra Maracuyá",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "zumo-grande-otras-frutas-opt-2",
        "name": "¿Lo deseas sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "zumo-grande-otras-frutas-opt-2-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Zumo Grande (otras frutas)",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Zumos Naturales",
    "descripcion": "350 mL Zumo 100% natural de la fruta que elijas",
    "precio": 3.5,
    "imagen": "/images/products/zumo-grande-otras-frutas.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "zumo-grande-otras-frutas-opt-0",
        "name": "Fruta",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "zumo-grande-otras-frutas-opt-0-fresa",
            "name": ".Fresa",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-kiwi",
            "name": ".kiwi",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-mango",
            "name": ".Mango",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-papaya",
            "name": ".Papaya",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-pina",
            "name": ".Piña",
            "priceDelta": 0
          },
          {
            "id": "zumo-grande-otras-frutas-opt-0-platano",
            "name": ".Plátano ",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "zumo-grande-otras-frutas-opt-1",
        "name": "¿Quieres una segunda fruta?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "zumo-grande-otras-frutas-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-coco",
            "name": "Extra coco",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-maracuya",
            "name": "Extra Maracuyá",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "zumo-grande-otras-frutas-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "zumo-grande-otras-frutas-opt-2",
        "name": "¿Lo deseas sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "zumo-grande-otras-frutas-opt-2-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-zumo-naranja-solo-naranja",
    "name": "Zumo Naranja (Sólo naranja)",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Zumos Naturales",
    "description": "Zumo de naranja recién exprimido tamaño a elegir",
    "descriptionStatus": "complete",
    "price": 2.9,
    "image": "/images/products/zumo-naranja-solo-naranja.jpg",
    "variants": [
      {
        "id": "zumo-naranja-solo-naranja-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "zumo-naranja-solo-naranja-fmt-pequeno",
            "name": "Pequeño",
            "priceDelta": 0
          },
          {
            "id": "zumo-naranja-solo-naranja-fmt-grande",
            "name": "Grande",
            "priceDelta": 1.3
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "zumo-naranja-solo-naranja-opt-0",
        "name": "¿Alguna especificación?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "zumo-naranja-solo-naranja-opt-0-colado",
            "name": "Colado",
            "priceDelta": 0
          },
          {
            "id": "zumo-naranja-solo-naranja-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Zumo Naranja (Sólo naranja)",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Zumos Naturales",
    "descripcion": "Zumo de naranja recién exprimido tamaño a elegir",
    "precio": 2.9,
    "imagen": "/images/products/zumo-naranja-solo-naranja.jpg",
    "variantes": [
      {
        "id": "zumo-naranja-solo-naranja-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "zumo-naranja-solo-naranja-fmt-pequeno",
            "name": "Pequeño",
            "priceDelta": 0
          },
          {
            "id": "zumo-naranja-solo-naranja-fmt-grande",
            "name": "Grande",
            "priceDelta": 1.3
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "zumo-naranja-solo-naranja-opt-0",
        "name": "¿Alguna especificación?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "zumo-naranja-solo-naranja-opt-0-colado",
            "name": "Colado",
            "priceDelta": 0
          },
          {
            "id": "zumo-naranja-solo-naranja-opt-0-hielo",
            "name": "Hielo",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-lota-limo",
    "name": "LOTA Limo",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Limonadas Artesanas",
    "description": "Limonada artesana elaborada con fresa y plátano naturales.",
    "descriptionStatus": "complete",
    "price": 3.8,
    "image": "/images/products/lota-limo.jpg",
    "variants": [],
    "extras": [
      {
        "id": "lota-limo-opt-0",
        "name": "Si la prefieres sin azúcar, márcala a continuación",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "lota-limo-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "lota-limo-opt-1",
        "name": "Si lo deseas para llevar, por favor márcalo a continuación",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "lota-limo-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "LOTA Limo",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Limonadas Artesanas",
    "descripcion": "Limonada artesana elaborada con fresa y plátano naturales.",
    "precio": 3.8,
    "imagen": "/images/products/lota-limo.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "lota-limo-opt-0",
        "name": "Si la prefieres sin azúcar, márcala a continuación",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "lota-limo-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "lota-limo-opt-1",
        "name": "Si lo deseas para llevar, por favor márcalo a continuación",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "lota-limo-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "limonadas-zumos-naturales-naranjada",
    "name": "Naranjada",
    "category": "LIMONADAS & ZUMOS NATURALES",
    "subcategory": "Limonadas Artesanas",
    "description": "Limonada artesanal, con zumo de naranja recién exprimido",
    "descriptionStatus": "complete",
    "price": 4,
    "image": "/images/products/naranjada.jpg",
    "variants": [],
    "extras": [
      {
        "id": "naranjada-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "naranjada-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "naranjada-opt-1",
        "name": "¿Añadir una segunda fruta?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "naranjada-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "naranjada-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "naranjada-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "naranjada-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "naranjada-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "naranjada-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "naranjada-opt-2",
        "name": "¿Lo deseas para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "naranjada-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Naranjada",
    "categoria": "LIMONADAS & ZUMOS NATURALES",
    "subcategoria": "Limonadas Artesanas",
    "descripcion": "Limonada artesanal, con zumo de naranja recién exprimido",
    "precio": 4,
    "imagen": "/images/products/naranjada.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "naranjada-opt-0",
        "name": "¿La prefieres sin azúcar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "naranjada-opt-0-sin-azucar",
            "name": "Sin azúcar",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "naranjada-opt-1",
        "name": "¿Añadir una segunda fruta?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "naranjada-opt-1-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "naranjada-opt-1-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "naranjada-opt-1-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "naranjada-opt-1-extra-papaya",
            "name": "Extra Papaya",
            "priceDelta": 0.5
          },
          {
            "id": "naranjada-opt-1-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "naranjada-opt-1-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "naranjada-opt-2",
        "name": "¿Lo deseas para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "naranjada-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-margarita",
    "name": "Margarita",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Margaritas & Cócteles",
    "description": "Clásico cóctel preparado principalmente con tequila, limón y sal.",
    "descriptionStatus": "complete",
    "price": 6.5,
    "image": "/images/products/margarita.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Margarita",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Margaritas & Cócteles",
    "descripcion": "Clásico cóctel preparado principalmente con tequila, limón y sal.",
    "precio": 6.5,
    "imagen": "/images/products/margarita.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-strawberrita",
    "name": "StrawberRita",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Margaritas & Cócteles",
    "description": "Clásico cóctel preparado principalmente con tequila, limón y sal, al que añadimos fresas para darle un toque dulce.",
    "descriptionStatus": "complete",
    "price": 7,
    "image": "/images/products/strawberrita.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "StrawberRita",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Margaritas & Cócteles",
    "descripcion": "Clásico cóctel preparado principalmente con tequila, limón y sal, al que añadimos fresas para darle un toque dulce.",
    "precio": 7,
    "imagen": "/images/products/strawberrita.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-mangorita",
    "name": "MangoRita",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Margaritas & Cócteles",
    "description": "Clásico cóctel preparado principalmente con tequila, limón y sal, al que añadimos mango para darle un toque dulce.",
    "descriptionStatus": "complete",
    "price": 7,
    "image": "/images/products/mangorita.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "MangoRita",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Margaritas & Cócteles",
    "descripcion": "Clásico cóctel preparado principalmente con tequila, limón y sal, al que añadimos mango para darle un toque dulce.",
    "precio": 7,
    "imagen": "/images/products/mangorita.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-pinarita",
    "name": "PiñaRita",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Margaritas & Cócteles",
    "description": "Clásico cóctel preparado principalmente con tequila, limón y sal, al que añadimos piña para darle un toque dulce.",
    "descriptionStatus": "complete",
    "price": 7,
    "image": "/images/products/pinarita.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "PiñaRita",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Margaritas & Cócteles",
    "descripcion": "Clásico cóctel preparado principalmente con tequila, limón y sal, al que añadimos piña para darle un toque dulce.",
    "precio": 7,
    "imagen": "/images/products/pinarita.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-coca-cola",
    "name": "Coca Cola",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.3,
    "image": "/images/products/coca-cola.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Coca Cola",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.3,
    "imagen": "/images/products/coca-cola.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-cola-z",
    "name": "Cola Z",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.3,
    "image": "/images/products/cola-z.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Cola Z",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.3,
    "imagen": "/images/products/cola-z.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-cola-zz",
    "name": "Cola ZZ",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": "No caffeine, sugar free",
    "descriptionStatus": "complete",
    "price": 2.3,
    "image": "/images/products/cola-zz.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Cola ZZ",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": "No caffeine, sugar free",
    "precio": 2.3,
    "imagen": "/images/products/cola-zz.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-7up",
    "name": "7up",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.3,
    "image": "/images/products/7up.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "7up",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.3,
    "imagen": "/images/products/7up.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-fuzetea-limon",
    "name": "FuzeTea Limón",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.6,
    "image": "/images/products/fuzetea-limon.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "FuzeTea Limón",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.6,
    "imagen": "/images/products/fuzetea-limon.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-fuzetea-maracuya",
    "name": "FuzeTea Maracuyá",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.6,
    "image": "/images/products/fuzetea-maracuya.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "FuzeTea Maracuyá",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.6,
    "imagen": "/images/products/fuzetea-maracuya.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-tonica",
    "name": "Tónica",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.5,
    "image": "/images/products/tonica.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Tónica",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.5,
    "imagen": "/images/products/tonica.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-fanta-limon",
    "name": "Fanta Limón",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.3,
    "image": "/images/products/fanta-limon.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Fanta Limón",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.3,
    "imagen": "/images/products/fanta-limon.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-fanta-naranja",
    "name": "Fanta Naranja",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.3,
    "image": "/images/products/fanta-naranja.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Fanta Naranja",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 2.3,
    "imagen": "/images/products/fanta-naranja.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-agua-grande",
    "name": "Agua Grande",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": "1.5L",
    "descriptionStatus": "complete",
    "price": 1.8,
    "image": "/images/products/agua-grande.jpg",
    "variants": [],
    "extras": [
      {
        "id": "agua-grande-opt-0",
        "name": "Temperatura",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "agua-grande-opt-0-fria",
            "name": ".FRÍA",
            "priceDelta": 0
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Agua Grande",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": "1.5L",
    "precio": 1.8,
    "imagen": "/images/products/agua-grande.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "agua-grande-opt-0",
        "name": "Temperatura",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "agua-grande-opt-0-fria",
            "name": ".FRÍA",
            "priceDelta": 0
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-agua-pequena",
    "name": "Agua Pequeña",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": "0.5L",
    "descriptionStatus": "complete",
    "price": 1,
    "image": "/images/products/agua-pequena.jpg",
    "variants": [],
    "extras": [
      {
        "id": "agua-pequena-opt-0",
        "name": "Temperatura",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "agua-pequena-opt-0-fria",
            "name": ".FRÍA",
            "priceDelta": 0
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Agua Pequeña",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": "0.5L",
    "precio": 1,
    "imagen": "/images/products/agua-pequena.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "agua-pequena-opt-0",
        "name": "Temperatura",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "agua-pequena-opt-0-fria",
            "name": ".FRÍA",
            "priceDelta": 0
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-botellin-cruzcampo",
    "name": "Botellín CruzCampo",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Cervezas",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.2,
    "image": "/images/products/botellin-cruzcampo.jpg",
    "variants": [],
    "extras": [
      {
        "id": "botellin-cruzcampo-opt-0",
        "name": "Prep",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "botellin-cruzcampo-opt-0-vaso",
            "name": "Vaso",
            "priceDelta": 0
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Botellín CruzCampo",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Cervezas",
    "descripcion": null,
    "precio": 1.2,
    "imagen": "/images/products/botellin-cruzcampo.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "botellin-cruzcampo-opt-0",
        "name": "Prep",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "botellin-cruzcampo-opt-0-vaso",
            "name": "Vaso",
            "priceDelta": 0
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-energizante",
    "name": "Energizante ",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": null,
    "descriptionStatus": "none",
    "price": 1.8,
    "image": "/images/products/energizante.jpg",
    "variants": [],
    "extras": [],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Energizante ",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": null,
    "precio": 1.8,
    "imagen": "/images/products/energizante.jpg",
    "variantes": [],
    "complementos": [],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "margaritas-refrescos-combinado",
    "name": "Combinado ",
    "category": "MARGARITAS & REFRESCOS",
    "subcategory": "Refrescos & Aguas",
    "description": "Copas ",
    "descriptionStatus": "complete",
    "price": 6.5,
    "image": "/images/products/combinado.jpg",
    "variants": [],
    "extras": [
      {
        "id": "combinado-opt-0",
        "name": "Alcohol",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "combinado-opt-0-gin-beefeater",
            "name": "Gin Beefeater",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-gin-puerto-de-indias",
            "name": "Gin Puerto de Indias",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-gin-seagrams",
            "name": "Gin Seagrams",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-barcelo",
            "name": "Ron Barcelo",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-brugal",
            "name": "Ron Brugal",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-legendario",
            "name": "Ron Legendario ",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-negrita",
            "name": "Ron Negrita",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-vodka-absolut",
            "name": "Vodka Absolut",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-whiskey-j-b",
            "name": "Whiskey J&B",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-whiskey-johnnie-walker-etiqueta-roja",
            "name": "Whiskey Johnnie Walker Etiqueta roja",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-whiskey-white-label",
            "name": "Whiskey White label",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "combinado-opt-1",
        "name": "Refresco",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "combinado-opt-1-fanta-n",
            "name": ". Fanta N",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-7up",
            "name": ".7up",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-cola",
            "name": ".cola",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-cola-z",
            "name": ".Cola z",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-cola-zz",
            "name": ".Cola zz",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-energizante",
            "name": ".Energizante",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-fanta-l",
            "name": ".Fanta L",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-tonica-combinado",
            "name": "Tónica combinado",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "combinado-opt-2",
        "name": "Doble",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "combinado-opt-2-doble-comb",
            "name": "Doble (comb)",
            "priceDelta": 3.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Combinado ",
    "categoria": "MARGARITAS & REFRESCOS",
    "subcategoria": "Refrescos & Aguas",
    "descripcion": "Copas ",
    "precio": 6.5,
    "imagen": "/images/products/combinado.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "combinado-opt-0",
        "name": "Alcohol",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "combinado-opt-0-gin-beefeater",
            "name": "Gin Beefeater",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-gin-puerto-de-indias",
            "name": "Gin Puerto de Indias",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-gin-seagrams",
            "name": "Gin Seagrams",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-barcelo",
            "name": "Ron Barcelo",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-brugal",
            "name": "Ron Brugal",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-legendario",
            "name": "Ron Legendario ",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-ron-negrita",
            "name": "Ron Negrita",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-vodka-absolut",
            "name": "Vodka Absolut",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-whiskey-j-b",
            "name": "Whiskey J&B",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-whiskey-johnnie-walker-etiqueta-roja",
            "name": "Whiskey Johnnie Walker Etiqueta roja",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-0-whiskey-white-label",
            "name": "Whiskey White label",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "combinado-opt-1",
        "name": "Refresco",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "combinado-opt-1-fanta-n",
            "name": ". Fanta N",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-7up",
            "name": ".7up",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-cola",
            "name": ".cola",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-cola-z",
            "name": ".Cola z",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-cola-zz",
            "name": ".Cola zz",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-energizante",
            "name": ".Energizante",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-fanta-l",
            "name": ".Fanta L",
            "priceDelta": 0
          },
          {
            "id": "combinado-opt-1-tonica-combinado",
            "name": "Tónica combinado",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "combinado-opt-2",
        "name": "Doble",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "combinado-opt-2-doble-comb",
            "name": "Doble (comb)",
            "priceDelta": 3.5
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-brunch-en-el-huerto",
    "name": "*Brunch en el Huerto",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Omelette & Brunch",
    "description": "Pan de rebanadas tostado, hummus, brotes verdes, tomate asado, aguacate, queso fresco y aceite de oliva V.E. aromatizado.\nAcompáñalo de patatas fritas (+1.8€)",
    "descriptionStatus": "complete",
    "price": 7.5,
    "image": "/images/products/brunch-en-el-huerto.jpg",
    "variants": [],
    "extras": [
      {
        "id": "brunch-en-el-huerto-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "brunch-en-el-huerto-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "brunch-en-el-huerto-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "brunch-en-el-huerto-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "brunch-en-el-huerto-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "brunch-en-el-huerto-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "brunch-en-el-huerto-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "brunch-en-el-huerto-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "brunch-en-el-huerto-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "brunch-en-el-huerto-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "brunch-en-el-huerto-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-1-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          },
          {
            "id": "brunch-en-el-huerto-opt-1-sin-brotes-verdes",
            "name": "Sin brotes verdes",
            "priceDelta": 0
          },
          {
            "id": "brunch-en-el-huerto-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "brunch-en-el-huerto-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "brunch-en-el-huerto-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Brunch en el Huerto",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Omelette & Brunch",
    "descripcion": "Pan de rebanadas tostado, hummus, brotes verdes, tomate asado, aguacate, queso fresco y aceite de oliva V.E. aromatizado.\nAcompáñalo de patatas fritas (+1.8€)",
    "precio": 7.5,
    "imagen": "/images/products/brunch-en-el-huerto.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "brunch-en-el-huerto-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "brunch-en-el-huerto-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "brunch-en-el-huerto-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "brunch-en-el-huerto-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "brunch-en-el-huerto-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "brunch-en-el-huerto-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "brunch-en-el-huerto-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "brunch-en-el-huerto-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "brunch-en-el-huerto-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "brunch-en-el-huerto-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "brunch-en-el-huerto-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-1-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          },
          {
            "id": "brunch-en-el-huerto-opt-1-sin-brotes-verdes",
            "name": "Sin brotes verdes",
            "priceDelta": 0
          },
          {
            "id": "brunch-en-el-huerto-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "brunch-en-el-huerto-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "brunch-en-el-huerto-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "brunch-en-el-huerto-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-bagel-ahumado",
    "name": "*Bagel Ahumado",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Bagels",
    "description": "¡El más completo! Bagel con queso crema, aguacate, brotes verdes, huevo plancha y salmón. ",
    "descriptionStatus": "complete",
    "price": 8.3,
    "image": "/images/products/bagel-ahumado.jpg",
    "variants": [],
    "extras": [
      {
        "id": "bagel-ahumado-opt-0",
        "name": "QUITAR",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-0-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          },
          {
            "id": "bagel-ahumado-opt-0-sin-brotes-verdes",
            "name": "Sin brotes verdes",
            "priceDelta": 0
          },
          {
            "id": "bagel-ahumado-opt-0-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "bagel-ahumado-opt-0-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bagel-ahumado-opt-1",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-1-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "bagel-ahumado-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "bagel-ahumado-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bagel-ahumado-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Bagel Ahumado",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Bagels",
    "descripcion": "¡El más completo! Bagel con queso crema, aguacate, brotes verdes, huevo plancha y salmón. ",
    "precio": 8.3,
    "imagen": "/images/products/bagel-ahumado.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "bagel-ahumado-opt-0",
        "name": "QUITAR",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-0-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          },
          {
            "id": "bagel-ahumado-opt-0-sin-brotes-verdes",
            "name": "Sin brotes verdes",
            "priceDelta": 0
          },
          {
            "id": "bagel-ahumado-opt-0-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "bagel-ahumado-opt-0-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bagel-ahumado-opt-1",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-1-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "bagel-ahumado-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "bagel-ahumado-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bagel-ahumado-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-ahumado-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-bagel-shelby",
    "name": "*Bagel Shelby",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Bagels",
    "description": "Bagel untado con mantequilla, brotes verdes, bacon, queso edam gratinado y huevo plancha.",
    "descriptionStatus": "complete",
    "price": 7.5,
    "image": "/images/products/bagel-shelby.jpg",
    "variants": [],
    "extras": [
      {
        "id": "bagel-shelby-opt-0",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-brotes-verdes",
            "name": "Sin brotes verdes",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-jamon",
            "name": "Sin jamón",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bagel-shelby-opt-1",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "bagel-shelby-opt-1-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "bagel-shelby-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "bagel-shelby-opt-2",
        "name": "¿Es para llevar? ¿Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bagel-shelby-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Marisco",
      "Moluscos",
      "Pescado",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Bagel Shelby",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Bagels",
    "descripcion": "Bagel untado con mantequilla, brotes verdes, bacon, queso edam gratinado y huevo plancha.",
    "precio": 7.5,
    "imagen": "/images/products/bagel-shelby.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "bagel-shelby-opt-0",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-brotes-verdes",
            "name": "Sin brotes verdes",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-jamon",
            "name": "Sin jamón",
            "priceDelta": 0
          },
          {
            "id": "bagel-shelby-opt-0-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bagel-shelby-opt-1",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "bagel-shelby-opt-1-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "bagel-shelby-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "bagel-shelby-opt-2",
        "name": "¿Es para llevar? ¿Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bagel-shelby-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bagel-shelby-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Marisco",
      "Moluscos",
      "Pescado",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-honeymoon",
    "name": "HoneyMoon / **",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Pan bagel, salsa honey mustard artesana (miel & mostaza), cebolla crujiente, carne mechá, bacon plancha y huevo. // INCLUYE PATATAS",
    "descriptionStatus": "complete",
    "price": 8.9,
    "image": "/images/products/honeymoon.jpg",
    "variants": [],
    "extras": [
      {
        "id": "honeymoon-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "honeymoon-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "honeymoon-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "honeymoon-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "honeymoon-opt-2",
        "name": "¿Lo quieres para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "honeymoon-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Apio",
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Mostaza",
      "Semillas de sésamo",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "HoneyMoon / **",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Pan bagel, salsa honey mustard artesana (miel & mostaza), cebolla crujiente, carne mechá, bacon plancha y huevo. // INCLUYE PATATAS",
    "precio": 8.9,
    "imagen": "/images/products/honeymoon.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "honeymoon-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "honeymoon-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "honeymoon-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "honeymoon-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "honeymoon-opt-2",
        "name": "¿Lo quieres para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "honeymoon-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "honeymoon-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Apio",
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Mostaza",
      "Semillas de sésamo",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-castiza",
    "name": "*Castiza",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Pan rústico artesano untado con mantequilla, 2 huevos revueltos con queso curado, coronado con jamón serrano Gran Reserva.",
    "descriptionStatus": "complete",
    "price": 7.2,
    "image": "/images/products/castiza.jpg",
    "variants": [],
    "extras": [
      {
        "id": "castiza-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "castiza-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "castiza-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "castiza-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "castiza-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "castiza-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "castiza-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "castiza-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "castiza-opt-1-sin-jamon",
            "name": "Sin jamón",
            "priceDelta": 0
          },
          {
            "id": "castiza-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "castiza-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "castiza-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "castiza-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Dióxido de azufre",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Castiza",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Pan rústico artesano untado con mantequilla, 2 huevos revueltos con queso curado, coronado con jamón serrano Gran Reserva.",
    "precio": 7.2,
    "imagen": "/images/products/castiza.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "castiza-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "castiza-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "castiza-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "castiza-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "castiza-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "castiza-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "castiza-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "castiza-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "castiza-opt-1-sin-jamon",
            "name": "Sin jamón",
            "priceDelta": 0
          },
          {
            "id": "castiza-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "castiza-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "castiza-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "castiza-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "castiza-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Dióxido de azufre",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-teca",
    "name": "*Teca",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Pan de semillas (abierto), con AOVE aromatizado, tomate triturado (artesano), rodajas de aguacate fresco, y semillas de sésamo.",
    "descriptionStatus": "complete",
    "price": 6.8,
    "image": "/images/products/teca.jpg",
    "variants": [],
    "extras": [
      {
        "id": "teca-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "teca-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "teca-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "teca-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "teca-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "teca-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "teca-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "teca-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "teca-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "teca-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "teca-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "teca-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "teca-opt-1-sin-aceite",
            "name": "Sin aceite",
            "priceDelta": 0
          },
          {
            "id": "teca-opt-1-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "teca-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "teca-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Teca",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Pan de semillas (abierto), con AOVE aromatizado, tomate triturado (artesano), rodajas de aguacate fresco, y semillas de sésamo.",
    "precio": 6.8,
    "imagen": "/images/products/teca.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "teca-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "teca-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "teca-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "teca-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "teca-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "teca-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "teca-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "teca-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "teca-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "teca-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "teca-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "teca-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "teca-opt-1-sin-aceite",
            "name": "Sin aceite",
            "priceDelta": 0
          },
          {
            "id": "teca-opt-1-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "teca-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "teca-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-shelby",
    "name": "*Shelby",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Griddled bacon, melted cheese, and a fried egg on a large Andalusian *mollete* roll. Add a side of fries for €1.80!",
    "descriptionStatus": "complete",
    "price": 7.1,
    "image": "/images/products/shelby.jpg",
    "variants": [],
    "extras": [
      {
        "id": "shelby-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "shelby-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "shelby-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "shelby-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "shelby-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "shelby-opt-0-cochinito-plancha",
            "name": "Cochinito plancha",
            "priceDelta": 1.5
          },
          {
            "id": "shelby-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "shelby-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "shelby-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "shelby-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "shelby-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "shelby-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "shelby-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Shelby",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Griddled bacon, melted cheese, and a fried egg on a large Andalusian *mollete* roll. Add a side of fries for €1.80!",
    "precio": 7.1,
    "imagen": "/images/products/shelby.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "shelby-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "shelby-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "shelby-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "shelby-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "shelby-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "shelby-opt-0-cochinito-plancha",
            "name": "Cochinito plancha",
            "priceDelta": 1.5
          },
          {
            "id": "shelby-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "shelby-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "shelby-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "shelby-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "shelby-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "shelby-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "shelby-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "shelby-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-omelette",
    "name": "*Omelette",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Omelette & Brunch",
    "description": "Tortilla francesa elaborada añadiendo los ingredientes de tu elección. Acompañada de pan tostado con mantequilla fundida.",
    "descriptionStatus": "complete",
    "price": 6,
    "image": "/images/products/omelette.jpg",
    "variants": [],
    "extras": [
      {
        "id": "omelette-opt-0",
        "name": "Ingredientes para añadir (dentro, caliente)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "omelette-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "omelette-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "omelette-opt-0-york",
            "name": "york",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "omelette-opt-1",
        "name": "Añadir fuera del Omelette (frescos)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "omelette-opt-1-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "omelette-opt-1-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "omelette-opt-1-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "omelette-opt-1-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "omelette-opt-1-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "omelette-opt-1-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "omelette-opt-1-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "omelette-opt-1-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "omelette-opt-1-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "omelette-opt-1-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "omelette-opt-2",
        "name": "¿Añadir guarnición de patatas?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-2-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "omelette-opt-3",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-3-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "omelette-opt-4",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-4-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Huevos"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Omelette",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Omelette & Brunch",
    "descripcion": "Tortilla francesa elaborada añadiendo los ingredientes de tu elección. Acompañada de pan tostado con mantequilla fundida.",
    "precio": 6,
    "imagen": "/images/products/omelette.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "omelette-opt-0",
        "name": "Ingredientes para añadir (dentro, caliente)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "omelette-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "omelette-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "omelette-opt-0-york",
            "name": "york",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "omelette-opt-1",
        "name": "Añadir fuera del Omelette (frescos)",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "omelette-opt-1-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "omelette-opt-1-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "omelette-opt-1-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "omelette-opt-1-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "omelette-opt-1-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "omelette-opt-1-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "omelette-opt-1-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "omelette-opt-1-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "omelette-opt-1-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "omelette-opt-1-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "omelette-opt-2",
        "name": "¿Añadir guarnición de patatas?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-2-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "omelette-opt-3",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-3-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "omelette-opt-4",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "omelette-opt-4-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Huevos"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-crunchy-cochinito",
    "name": "*Crunchy Cochinito",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Pan de molde tostado con base de mayonesa ahumada, champiñones plancha, crispy onion, cochinito a la plancha y queso fundido.",
    "descriptionStatus": "complete",
    "price": 7,
    "image": "/images/products/crunchy-cochinito.jpg",
    "variants": [],
    "extras": [
      {
        "id": "crunchy-cochinito-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "crunchy-cochinito-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "crunchy-cochinito-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "crunchy-cochinito-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "crunchy-cochinito-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "crunchy-cochinito-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "crunchy-cochinito-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-1-sin-cebolla",
            "name": "Sin Cebolla",
            "priceDelta": 0
          },
          {
            "id": "crunchy-cochinito-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "crunchy-cochinito-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "crunchy-cochinito-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "crunchy-cochinito-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Dióxido de azufre",
      "Huevos",
      "Mostaza"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Crunchy Cochinito",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Pan de molde tostado con base de mayonesa ahumada, champiñones plancha, crispy onion, cochinito a la plancha y queso fundido.",
    "precio": 7,
    "imagen": "/images/products/crunchy-cochinito.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "crunchy-cochinito-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "crunchy-cochinito-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "crunchy-cochinito-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "crunchy-cochinito-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "crunchy-cochinito-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "crunchy-cochinito-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "crunchy-cochinito-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-1-sin-cebolla",
            "name": "Sin Cebolla",
            "priceDelta": 0
          },
          {
            "id": "crunchy-cochinito-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "crunchy-cochinito-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "crunchy-cochinito-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "crunchy-cochinito-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "crunchy-cochinito-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Dióxido de azufre",
      "Huevos",
      "Mostaza"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-new-ny-brioche-sandwich",
    "name": "*New NY Brioche Sandwich",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "3 rebanadas de pan brioche, mantequilla, jamon york cortado al momento, queso edam fundido y un toque fresco de aguacate.",
    "descriptionStatus": "complete",
    "price": 7.5,
    "image": "/images/products/new-ny-brioche-sandwich.jpg",
    "variants": [],
    "extras": [
      {
        "id": "new-ny-brioche-sandwich-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "new-ny-brioche-sandwich-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-1-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          },
          {
            "id": "new-ny-brioche-sandwich-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "new-ny-brioche-sandwich-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "new-ny-brioche-sandwich-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Dióxido de azufre",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*New NY Brioche Sandwich",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "3 rebanadas de pan brioche, mantequilla, jamon york cortado al momento, queso edam fundido y un toque fresco de aguacate.",
    "precio": 7.5,
    "imagen": "/images/products/new-ny-brioche-sandwich.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "new-ny-brioche-sandwich-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "new-ny-brioche-sandwich-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "new-ny-brioche-sandwich-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-1-sin-aguacate",
            "name": "Sin aguacate",
            "priceDelta": 0
          },
          {
            "id": "new-ny-brioche-sandwich-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "new-ny-brioche-sandwich-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "new-ny-brioche-sandwich-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "new-ny-brioche-sandwich-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Dióxido de azufre",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-casa-sandwich",
    "name": "CASA Sandwich /**",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Mollete Andaluz untado con mojo picón, Carne Mechá y queso edma gratinado. Incluye patatas fritas.",
    "descriptionStatus": "complete",
    "price": 7.2,
    "image": "/images/products/casa-sandwich.jpg",
    "variants": [],
    "extras": [
      {
        "id": "casa-sandwich-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "casa-sandwich-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "casa-sandwich-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "casa-sandwich-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "casa-sandwich-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "casa-sandwich-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "casa-sandwich-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "casa-sandwich-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "casa-sandwich-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "casa-sandwich-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "casa-sandwich-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Apio",
      "Cacahuetes",
      "Cereales con gluten",
      "Dióxido de azufre",
      "Frutos secos",
      "Leche",
      "Mostaza",
      "Semillas de sésamo",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "CASA Sandwich /**",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Mollete Andaluz untado con mojo picón, Carne Mechá y queso edma gratinado. Incluye patatas fritas.",
    "precio": 7.2,
    "imagen": "/images/products/casa-sandwich.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "casa-sandwich-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "casa-sandwich-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "casa-sandwich-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "casa-sandwich-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "casa-sandwich-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "casa-sandwich-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "casa-sandwich-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "casa-sandwich-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "casa-sandwich-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "casa-sandwich-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "casa-sandwich-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "casa-sandwich-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Apio",
      "Cacahuetes",
      "Cereales con gluten",
      "Dióxido de azufre",
      "Frutos secos",
      "Leche",
      "Mostaza",
      "Semillas de sésamo",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-baconizate",
    "name": "Baconízate /**",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Sándwiches & Brioche",
    "description": "Mollete de Antequera untado con Siracha mayo, cebolla crujiente y 8 tiras de bacon a la plancha intercalada con queso Edam. Incluye Patatas Fritas",
    "descriptionStatus": "complete",
    "price": 8.1,
    "image": "/images/products/baconizate.jpg",
    "variants": [],
    "extras": [
      {
        "id": "baconizate-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "baconizate-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "baconizate-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "baconizate-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "baconizate-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-1-sin-cebolla",
            "name": "Sin Cebolla",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "baconizate-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "baconizate-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Leche",
      "Mostaza",
      "Semillas de sésamo",
      "Soja",
      "Picante"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Baconízate /**",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Sándwiches & Brioche",
    "descripcion": "Mollete de Antequera untado con Siracha mayo, cebolla crujiente y 8 tiras de bacon a la plancha intercalada con queso Edam. Incluye Patatas Fritas",
    "precio": 8.1,
    "imagen": "/images/products/baconizate.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "baconizate-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "baconizate-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "baconizate-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "baconizate-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "baconizate-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-1-sin-cebolla",
            "name": "Sin Cebolla",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "baconizate-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "baconizate-opt-2",
        "name": "Si es para llevar; ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "baconizate-opt-3",
        "name": "Para pan sin gluten:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "baconizate-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Leche",
      "Mostaza",
      "Semillas de sésamo",
      "Soja",
      "Picante"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-american-style",
    "name": "*American Style",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Omelette & Brunch",
    "description": "3 Tortitas caseras, siropes de caramelo, bacon y huevo plancha.",
    "descriptionStatus": "complete",
    "price": 7.2,
    "image": "/images/products/american-style.jpg",
    "variants": [],
    "extras": [
      {
        "id": "american-style-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "american-style-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "american-style-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "american-style-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "american-style-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "american-style-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "american-style-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "american-style-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "american-style-opt-2",
        "name": "Si es para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "american-style-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Huevos"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*American Style",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Omelette & Brunch",
    "descripcion": "3 Tortitas caseras, siropes de caramelo, bacon y huevo plancha.",
    "precio": 7.2,
    "imagen": "/images/products/american-style.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "american-style-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "american-style-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "american-style-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "american-style-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "american-style-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "american-style-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "american-style-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "american-style-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "american-style-opt-2",
        "name": "Si es para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "american-style-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "american-style-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Huevos"
    ],
    "disponible": true
  },
  {
    "id": "salado-sandwiches-omelette-fili-waffle",
    "name": "*Fili Waffle",
    "category": "Salado (Sándwiches & Omelette)",
    "subcategory": "Gofres Salados",
    "description": "Gofre artesano untado con queso crema, bacon plancha, huevo revuelto y toque de caramelo.",
    "descriptionStatus": "complete",
    "price": 7.2,
    "image": "/images/products/fili-waffle.jpg",
    "variants": [],
    "extras": [
      {
        "id": "fili-waffle-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "fili-waffle-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "fili-waffle-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "fili-waffle-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "fili-waffle-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "fili-waffle-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "fili-waffle-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "fili-waffle-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "fili-waffle-opt-2",
        "name": "Si es para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "fili-waffle-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Altramuces",
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Fili Waffle",
    "categoria": "Salado (Sándwiches & Omelette)",
    "subcategoria": "Gofres Salados",
    "descripcion": "Gofre artesano untado con queso crema, bacon plancha, huevo revuelto y toque de caramelo.",
    "precio": 7.2,
    "imagen": "/images/products/fili-waffle.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "fili-waffle-opt-0",
        "name": "¿Algo que añadir?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "fili-waffle-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "fili-waffle-opt-0-cambio-por-queso-cheddar",
            "name": "Cambio por queso CHEDDAR",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "fili-waffle-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "fili-waffle-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "fili-waffle-opt-0-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      },
      {
        "id": "fili-waffle-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "fili-waffle-opt-1-sin-bacon",
            "name": "Sin bacon",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-1-sin-huevo",
            "name": "Sin huevo",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-1-sin-queso",
            "name": "Sin queso",
            "priceDelta": 0
          },
          {
            "id": "fili-waffle-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "fili-waffle-opt-2",
        "name": "Si es para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "fili-waffle-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Altramuces",
      "Cacahuetes",
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Semillas de sésamo"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-tortitas-al-gusto",
    "name": "*Tortitas Al Gusto",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": "¡Añade todos los ingredientes que quieras!",
    "descriptionStatus": "complete",
    "price": 4,
    "image": "/images/products/tortitas-al-gusto.jpg",
    "variants": [],
    "extras": [
      {
        "id": "tortitas-al-gusto-opt-0",
        "name": "DULCE",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "tortitas-al-gusto-opt-1",
        "name": "SALADO",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-1-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "tortitas-al-gusto-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "tortitas-al-gusto-opt-1-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "tortitas-al-gusto-opt-1-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "tortitas-al-gusto-opt-1-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "tortitas-al-gusto-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "tortitas-al-gusto-opt-1-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-1-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "tortitas-al-gusto-opt-1-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-al-gusto-opt-1-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "tortitas-al-gusto-opt-1-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "tortitas-al-gusto-opt-1-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          },
          {
            "id": "tortitas-al-gusto-opt-1-york",
            "name": "york",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "tortitas-al-gusto-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "tortitas-al-gusto-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Huevos"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Tortitas Al Gusto",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": "¡Añade todos los ingredientes que quieras!",
    "precio": 4,
    "imagen": "/images/products/tortitas-al-gusto.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "tortitas-al-gusto-opt-0",
        "name": "DULCE",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-al-gusto-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "tortitas-al-gusto-opt-1",
        "name": "SALADO",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-1-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "tortitas-al-gusto-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "tortitas-al-gusto-opt-1-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "tortitas-al-gusto-opt-1-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "tortitas-al-gusto-opt-1-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "tortitas-al-gusto-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "tortitas-al-gusto-opt-1-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-1-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "tortitas-al-gusto-opt-1-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-al-gusto-opt-1-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "tortitas-al-gusto-opt-1-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "tortitas-al-gusto-opt-1-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "tortitas-al-gusto-opt-1-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "tortitas-al-gusto-opt-1-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          },
          {
            "id": "tortitas-al-gusto-opt-1-york",
            "name": "york",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "tortitas-al-gusto-opt-2",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "tortitas-al-gusto-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-al-gusto-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Huevos"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-gofre-al-gusto",
    "name": "*Gofre Al Gusto",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Gofres",
    "description": "¡Añade todos los ingredientes que quieras! S = SIROPE // T = TOPPING",
    "descriptionStatus": "complete",
    "price": 4,
    "image": "/images/products/gofre-al-gusto.jpg",
    "variants": [],
    "extras": [
      {
        "id": "gofre-al-gusto-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "gofre-al-gusto-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "gofre-al-gusto-opt-1",
        "name": "SALADO",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "gofre-al-gusto-opt-1-1-huevo",
            "name": "+1 HUEVO",
            "priceDelta": 1.6
          },
          {
            "id": "gofre-al-gusto-opt-1-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "gofre-al-gusto-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "gofre-al-gusto-opt-1-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "gofre-al-gusto-opt-1-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "gofre-al-gusto-opt-1-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "gofre-al-gusto-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "gofre-al-gusto-opt-1-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-1-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-1-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "gofre-al-gusto-opt-1-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "gofre-al-gusto-opt-1-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-1-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "gofre-al-gusto-opt-1-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-1-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-1-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "gofre-al-gusto-opt-1-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-1-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "gofre-al-gusto-opt-1-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "gofre-al-gusto-opt-2",
        "name": "Especial",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "gofre-al-gusto-opt-2-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-2-all-on-side",
            "name": "ALL ON SIDE",
            "priceDelta": 0
          },
          {
            "id": "gofre-al-gusto-opt-2-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "gofre-al-gusto-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Huevos"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Gofre Al Gusto",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Gofres",
    "descripcion": "¡Añade todos los ingredientes que quieras! S = SIROPE // T = TOPPING",
    "precio": 4,
    "imagen": "/images/products/gofre-al-gusto.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "gofre-al-gusto-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "gofre-al-gusto-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "gofre-al-gusto-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "gofre-al-gusto-opt-1",
        "name": "SALADO",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "gofre-al-gusto-opt-1-1-huevo",
            "name": "+1 HUEVO",
            "priceDelta": 1.6
          },
          {
            "id": "gofre-al-gusto-opt-1-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "gofre-al-gusto-opt-1-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "gofre-al-gusto-opt-1-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "gofre-al-gusto-opt-1-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "gofre-al-gusto-opt-1-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "gofre-al-gusto-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "gofre-al-gusto-opt-1-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-1-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-1-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "gofre-al-gusto-opt-1-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "gofre-al-gusto-opt-1-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-1-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "gofre-al-gusto-opt-1-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "gofre-al-gusto-opt-1-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-1-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "gofre-al-gusto-opt-1-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "gofre-al-gusto-opt-1-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-1-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "gofre-al-gusto-opt-1-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "gofre-al-gusto-opt-2",
        "name": "Especial",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "gofre-al-gusto-opt-2-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          },
          {
            "id": "gofre-al-gusto-opt-2-all-on-side",
            "name": "ALL ON SIDE",
            "priceDelta": 0
          },
          {
            "id": "gofre-al-gusto-opt-2-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "gofre-al-gusto-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Huevos"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-tortitas-mantequilla-arce-y-nata",
    "name": "Tortitas Mantequilla, Arce y Nata",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": null,
    "descriptionStatus": "none",
    "price": 5.45,
    "image": "/images/products/tortitas-mantequilla-arce-y-nata.jpg",
    "variants": [],
    "extras": [
      {
        "id": "tortitas-mantequilla-arce-y-nata-opt-0",
        "name": "¿Algún extra?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "tortitas-mantequilla-arce-y-nata-opt-1",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-1-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Huevos",
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Tortitas Mantequilla, Arce y Nata",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": null,
    "precio": 5.45,
    "imagen": "/images/products/tortitas-mantequilla-arce-y-nata.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "tortitas-mantequilla-arce-y-nata-opt-0",
        "name": "¿Algún extra?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "tortitas-mantequilla-arce-y-nata-opt-1",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-mantequilla-arce-y-nata-opt-1-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Huevos",
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-tortitas-nutella-fresas-y-platano-frescos",
    "name": "Tortitas Nutella, Fresas y Plátano frescos",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": null,
    "descriptionStatus": "none",
    "price": 6.2,
    "image": "/images/products/tortitas-nutella-fresas-y-platano-frescos.jpg",
    "variants": [],
    "extras": [
      {
        "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "tortitas-nutella-fresas-y-platano-frescos-opt-1",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-1-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Tortitas Nutella, Fresas y Plátano frescos",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": null,
    "precio": 6.2,
    "imagen": "/images/products/tortitas-nutella-fresas-y-platano-frescos.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          }
        ]
      },
      {
        "id": "tortitas-nutella-fresas-y-platano-frescos-opt-1",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-nutella-fresas-y-platano-frescos-opt-1-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-tortitas-pistacho-y-vainilla",
    "name": "Tortitas Pistacho y Vainilla",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": "Top Sellers",
    "descriptionStatus": "complete",
    "price": 5.8,
    "image": "/images/products/tortitas-pistacho-y-vainilla.jpg",
    "variants": [],
    "extras": [
      {
        "id": "tortitas-pistacho-y-vainilla-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-pistacho-y-vainilla-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "tortitas-pistacho-y-vainilla-opt-1",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-pistacho-y-vainilla-opt-1-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Soja"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Tortitas Pistacho y Vainilla",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": "Top Sellers",
    "precio": 5.8,
    "imagen": "/images/products/tortitas-pistacho-y-vainilla.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "tortitas-pistacho-y-vainilla-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-pistacho-y-vainilla-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "tortitas-pistacho-y-vainilla-opt-1",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "tortitas-pistacho-y-vainilla-opt-1-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Frutos secos",
      "Huevos",
      "Leche",
      "Soja"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-vaqueritas",
    "name": "*Vaqueritas",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": "3 tortitas artesanas untadas en dulce de leche, con nata entre ellas",
    "descriptionStatus": "complete",
    "price": 5.9,
    "image": "/images/products/vaqueritas.jpg",
    "variants": [],
    "extras": [
      {
        "id": "vaqueritas-opt-0",
        "name": "¿Añadimos Nutella y/o helado?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaqueritas-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "vaqueritas-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "vaqueritas-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "vaqueritas-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "vaqueritas-opt-1",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaqueritas-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "vaqueritas-opt-2",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaqueritas-opt-2-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Huevos",
      "Leche"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Vaqueritas",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": "3 tortitas artesanas untadas en dulce de leche, con nata entre ellas",
    "precio": 5.9,
    "imagen": "/images/products/vaqueritas.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "vaqueritas-opt-0",
        "name": "¿Añadimos Nutella y/o helado?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaqueritas-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "vaqueritas-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "vaqueritas-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "vaqueritas-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          }
        ]
      },
      {
        "id": "vaqueritas-opt-1",
        "name": "¿Es para llevar? ¡Márcalo aquí!",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaqueritas-opt-1-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "vaqueritas-opt-2",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "vaqueritas-opt-2-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Huevos",
      "Leche"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-peniques",
    "name": "Peniques",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": "2 tortitas versión mini, con mantequilla fundida, ideales para acompañar un café/té. Tamaño ideal para 1 sola persona. Puedes añadir lo que quieras en lugar de la mantequilla.",
    "descriptionStatus": "complete",
    "price": 3,
    "image": "/images/products/peniques.jpg",
    "variants": [],
    "extras": [
      {
        "id": "peniques-opt-0",
        "name": "Dulce",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "peniques-opt-0-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          },
          {
            "id": "peniques-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "peniques-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "peniques-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "peniques-opt-0-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "peniques-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "peniques-opt-1",
        "name": "Salado",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "peniques-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "peniques-opt-1-york",
            "name": "york",
            "priceDelta": 0.6
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Frutos secos"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Peniques",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": "2 tortitas versión mini, con mantequilla fundida, ideales para acompañar un café/té. Tamaño ideal para 1 sola persona. Puedes añadir lo que quieras en lugar de la mantequilla.",
    "precio": 3,
    "imagen": "/images/products/peniques.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "peniques-opt-0",
        "name": "Dulce",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "peniques-opt-0-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          },
          {
            "id": "peniques-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "peniques-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "peniques-opt-0-extra-kiwi-fresco",
            "name": "Extra kiwi fresco",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "peniques-opt-0-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "peniques-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "peniques-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "peniques-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "peniques-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "peniques-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "peniques-opt-1",
        "name": "Salado",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "peniques-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "peniques-opt-1-york",
            "name": "york",
            "priceDelta": 0.6
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Frutos secos"
    ],
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-bowl-mini-tortitas",
    "name": "BOWL MINI TORTITAS",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Bowls Dulces",
    "description": "6 mini tortitas artesanas, nata, fresa fresca, sirope de chocolate y muesli.",
    "descriptionStatus": "complete",
    "price": 6.5,
    "image": "/images/products/bowl-mini-tortitas.jpg",
    "variants": [],
    "extras": [
      {
        "id": "bowl-mini-tortitas-opt-0",
        "name": "Extras",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "bowl-mini-tortitas-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-1-sin-nata",
            "name": "Sin nata",
            "priceDelta": 0
          },
          {
            "id": "bowl-mini-tortitas-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bowl-mini-tortitas-opt-2",
        "name": "¿para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bowl-mini-tortitas-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "BOWL MINI TORTITAS",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Bowls Dulces",
    "descripcion": "6 mini tortitas artesanas, nata, fresa fresca, sirope de chocolate y muesli.",
    "precio": 6.5,
    "imagen": "/images/products/bowl-mini-tortitas.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "bowl-mini-tortitas-opt-0",
        "name": "Extras",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-arandanos",
            "name": "Extra Arándanos ",
            "priceDelta": 0.7
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-mango",
            "name": "Extra mango",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-arce",
            "name": "Sirope Arce",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "bowl-mini-tortitas-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "bowl-mini-tortitas-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "bowl-mini-tortitas-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-1-sin-nata",
            "name": "Sin nata",
            "priceDelta": 0
          },
          {
            "id": "bowl-mini-tortitas-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bowl-mini-tortitas-opt-2",
        "name": "¿para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bowl-mini-tortitas-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bowl-mini-tortitas-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "dulces-bowl-tortitas-gofres-bali-pancakes",
    "name": "*Bali Pancakes",
    "category": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategory": "Tortitas & Pancakes",
    "description": "6 mini homemade pancakes, agave syrup, and sweet salted butter; dusted with powdered sugar.",
    "descriptionStatus": "complete",
    "price": 6.5,
    "image": "/images/products/bali-pancakes.jpg",
    "variants": [],
    "extras": [
      {
        "id": "bali-pancakes-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "bali-pancakes-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "bali-pancakes-opt-0-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "bali-pancakes-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "bali-pancakes-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bali-pancakes-opt-2",
        "name": "¿Es para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bali-pancakes-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "*Bali Pancakes",
    "categoria": "Dulces (Bowl, Tortitas, Gofres)",
    "subcategoria": "Tortitas & Pancakes",
    "descripcion": "6 mini homemade pancakes, agave syrup, and sweet salted butter; dusted with powdered sugar.",
    "precio": 6.5,
    "imagen": "/images/products/bali-pancakes.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "bali-pancakes-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.9
          },
          {
            "id": "bali-pancakes-opt-0-extra-naranja-fresca",
            "name": "Extra naranja fresca",
            "priceDelta": 0.7
          },
          {
            "id": "bali-pancakes-opt-0-extra-pina",
            "name": "Extra piña",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-helado-choco",
            "name": "Helado choco",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-helado-fresa",
            "name": "Helado fresa ",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-helado-vainilla",
            "name": "Helado Vainilla",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-nata",
            "name": "Nata",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sabor-vainilla",
            "name": "Sabor Vainilla",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-caramelo",
            "name": "Sirope Caramelo",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-chocolate",
            "name": "Sirope Chocolate",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-chocolate-blanco",
            "name": "Sirope Chocolate Blanco",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-cookies-cream",
            "name": "Sirope Cookies & cream",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-crunchy-salted-caramel",
            "name": "Sirope Crunchy Salted Caramel",
            "priceDelta": 1
          },
          {
            "id": "bali-pancakes-opt-0-sirope-dulce-leche",
            "name": "Sirope Dulce leche",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-fresa",
            "name": "Sirope Fresa",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-sirope-kinder",
            "name": "Sirope Kinder",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-lotus",
            "name": "Sirope Lotus",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-nutella",
            "name": "Sirope Nutella ",
            "priceDelta": 0.7
          },
          {
            "id": "bali-pancakes-opt-0-sirope-pistacho",
            "name": "Sirope Pistacho ",
            "priceDelta": 0.8
          },
          {
            "id": "bali-pancakes-opt-0-sirope-salsa-arandanos",
            "name": "Sirope Salsa arándanos ",
            "priceDelta": 0.5
          },
          {
            "id": "bali-pancakes-opt-0-topping-chips-ahoy",
            "name": "Topping Chips Ahoy",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-filipinos-bl",
            "name": "Topping Filipinos Bl",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-huesitos",
            "name": "Topping Huesitos",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-kit-kat",
            "name": "Topping Kit Kat",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-lacasitos",
            "name": "Topping Lacasitos",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-lotus",
            "name": "Topping Lotus ",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-muesli",
            "name": "Topping Muesli",
            "priceDelta": 0.6
          },
          {
            "id": "bali-pancakes-opt-0-topping-oreo",
            "name": "Topping Oreo",
            "priceDelta": 0.6
          }
        ]
      },
      {
        "id": "bali-pancakes-opt-1",
        "name": "¿Algo que quitar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-1-sin-salsa",
            "name": "Sin salsa",
            "priceDelta": 0
          }
        ]
      },
      {
        "id": "bali-pancakes-opt-2",
        "name": "¿Es para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      },
      {
        "id": "bali-pancakes-opt-3",
        "name": "Si habías reservado masa sin gluten, márcalo aquí:",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "bali-pancakes-opt-3-gluten-free",
            "name": "%#@GLUTEN FREE@#%",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "tostadas-simples-pan-de-semillas",
    "name": "Pan de Semillas",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": "75 gramos",
    "descriptionStatus": "complete",
    "price": 1.5,
    "image": "/images/products/pan-de-semillas.jpg",
    "variants": [],
    "extras": [
      {
        "id": "pan-de-semillas-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-de-semillas-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-de-semillas-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.2
          },
          {
            "id": "pan-de-semillas-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-de-semillas-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-de-semillas-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-de-semillas-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-de-semillas-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-de-semillas-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-de-semillas-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 1.5
          },
          {
            "id": "pan-de-semillas-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.3
          },
          {
            "id": "pan-de-semillas-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.3
          },
          {
            "id": "pan-de-semillas-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.3
          },
          {
            "id": "pan-de-semillas-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.2
          },
          {
            "id": "pan-de-semillas-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-de-semillas-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 2.2
          },
          {
            "id": "pan-de-semillas-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1
          },
          {
            "id": "pan-de-semillas-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-de-semillas-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-de-semillas-opt-0-york",
            "name": "york",
            "priceDelta": 0.15
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Pan de Semillas",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": "75 gramos",
    "precio": 1.5,
    "imagen": "/images/products/pan-de-semillas.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "pan-de-semillas-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-de-semillas-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-de-semillas-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.2
          },
          {
            "id": "pan-de-semillas-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-de-semillas-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-de-semillas-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-de-semillas-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-de-semillas-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-de-semillas-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-de-semillas-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 1.5
          },
          {
            "id": "pan-de-semillas-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.6
          },
          {
            "id": "pan-de-semillas-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.3
          },
          {
            "id": "pan-de-semillas-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.3
          },
          {
            "id": "pan-de-semillas-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.3
          },
          {
            "id": "pan-de-semillas-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.2
          },
          {
            "id": "pan-de-semillas-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.5
          },
          {
            "id": "pan-de-semillas-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-de-semillas-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 2.2
          },
          {
            "id": "pan-de-semillas-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1
          },
          {
            "id": "pan-de-semillas-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-de-semillas-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-de-semillas-opt-0-york",
            "name": "york",
            "priceDelta": 0.15
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "tostadas-simples-mollete-de-antequera",
    "name": "Mollete de Antequera",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": "Please add the ingredientes you would like to have inside ",
    "descriptionStatus": "complete",
    "price": 1.9,
    "image": "/images/products/mollete-de-antequera.jpg",
    "variants": [],
    "extras": [
      {
        "id": "mollete-de-antequera-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mollete-de-antequera-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "mollete-de-antequera-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "mollete-de-antequera-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "mollete-de-antequera-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "mollete-de-antequera-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "mollete-de-antequera-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "mollete-de-antequera-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "mollete-de-antequera-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "mollete-de-antequera-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "mollete-de-antequera-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "mollete-de-antequera-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "mollete-de-antequera-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "mollete-de-antequera-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "mollete-de-antequera-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "mollete-de-antequera-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "mollete-de-antequera-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.25
          },
          {
            "id": "mollete-de-antequera-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.25
          },
          {
            "id": "mollete-de-antequera-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "mollete-de-antequera-opt-1",
        "name": "¿Añadir huevo a tu desayuno?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mollete-de-antequera-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "mollete-de-antequera-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "mollete-de-antequera-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "mollete-de-antequera-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mollete-de-antequera-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Mollete de Antequera",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": "Please add the ingredientes you would like to have inside ",
    "precio": 1.9,
    "imagen": "/images/products/mollete-de-antequera.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "mollete-de-antequera-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mollete-de-antequera-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "mollete-de-antequera-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "mollete-de-antequera-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "mollete-de-antequera-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "mollete-de-antequera-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "mollete-de-antequera-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "mollete-de-antequera-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "mollete-de-antequera-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "mollete-de-antequera-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "mollete-de-antequera-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "mollete-de-antequera-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "mollete-de-antequera-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "mollete-de-antequera-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "mollete-de-antequera-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "mollete-de-antequera-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "mollete-de-antequera-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "mollete-de-antequera-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "mollete-de-antequera-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.25
          },
          {
            "id": "mollete-de-antequera-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.25
          },
          {
            "id": "mollete-de-antequera-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "mollete-de-antequera-opt-1",
        "name": "¿Añadir huevo a tu desayuno?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mollete-de-antequera-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "mollete-de-antequera-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "mollete-de-antequera-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "mollete-de-antequera-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "mollete-de-antequera-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "tostadas-simples-pan-rustico",
    "name": "Pan Rústico",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": "Please add the ingredientes you would like to have inside ",
    "descriptionStatus": "complete",
    "price": 1.4,
    "image": "/images/products/pan-rustico.jpg",
    "variants": [
      {
        "id": "pan-rustico-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pan-rustico-fmt-media",
            "name": "Media",
            "priceDelta": 0
          },
          {
            "id": "pan-rustico-fmt-entera",
            "name": "Entera",
            "priceDelta": 0.3
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "pan-rustico-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-rustico-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-rustico-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-rustico-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-rustico-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-rustico-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-rustico-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-rustico-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-rustico-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-rustico-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-rustico-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-rustico-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-rustico-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "pan-rustico-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-rustico-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-rustico-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-rustico-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-rustico-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-rustico-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-rustico-opt-1",
        "name": "¿Añadimos huevo a tu tostada?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-rustico-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-rustico-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-rustico-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-rustico-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-rustico-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Pan Rústico",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": "Please add the ingredientes you would like to have inside ",
    "precio": 1.4,
    "imagen": "/images/products/pan-rustico.jpg",
    "variantes": [
      {
        "id": "pan-rustico-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pan-rustico-fmt-media",
            "name": "Media",
            "priceDelta": 0
          },
          {
            "id": "pan-rustico-fmt-entera",
            "name": "Entera",
            "priceDelta": 0.3
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "pan-rustico-opt-0",
        "name": "Extras 1",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-rustico-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-rustico-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-rustico-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-rustico-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-rustico-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-rustico-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-rustico-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-rustico-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-rustico-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-rustico-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-rustico-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-rustico-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "pan-rustico-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-rustico-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-rustico-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-rustico-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-rustico-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1
          },
          {
            "id": "pan-rustico-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-rustico-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-rustico-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-rustico-opt-1",
        "name": "¿Añadimos huevo a tu tostada?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-rustico-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-rustico-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-rustico-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-rustico-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-rustico-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "tostadas-simples-pan-integral",
    "name": "Pan Integral",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": "Please add the ingredientes you would like to have inside ",
    "descriptionStatus": "complete",
    "price": 1.4,
    "image": "/images/products/pan-integral.jpg",
    "variants": [
      {
        "id": "pan-integral-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pan-integral-fmt-media",
            "name": "Media",
            "priceDelta": 0
          },
          {
            "id": "pan-integral-fmt-entera",
            "name": "Entera",
            "priceDelta": 0.8
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "pan-integral-opt-0",
        "name": "Ingredientes para tu tostada",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-integral-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-integral-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-integral-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-integral-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-integral-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-integral-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-integral-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-integral-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-integral-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-integral-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-integral-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-integral-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "pan-integral-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-integral-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-integral-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-integral-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-integral-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-integral-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-integral-opt-1",
        "name": "¿Quieres añadirle huevo?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-integral-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-integral-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-integral-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-integral-opt-2",
        "name": "¿Lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-integral-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Pan Integral",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": "Please add the ingredientes you would like to have inside ",
    "precio": 1.4,
    "imagen": "/images/products/pan-integral.jpg",
    "variantes": [
      {
        "id": "pan-integral-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pan-integral-fmt-media",
            "name": "Media",
            "priceDelta": 0
          },
          {
            "id": "pan-integral-fmt-entera",
            "name": "Entera",
            "priceDelta": 0.8
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "pan-integral-opt-0",
        "name": "Ingredientes para tu tostada",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-integral-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-integral-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-integral-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-integral-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-integral-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-integral-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-integral-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-integral-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-integral-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-integral-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-integral-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-integral-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "pan-integral-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-integral-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-integral-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-integral-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-integral-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1
          },
          {
            "id": "pan-integral-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-integral-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-integral-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-integral-opt-1",
        "name": "¿Quieres añadirle huevo?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-integral-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-integral-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-integral-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-integral-opt-2",
        "name": "¿Lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-integral-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "tostadas-simples-pan-brioche",
    "name": "Pan Brioche ",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": "Rebanadas de pan brioche tostado con los ingredientes de tu elección ",
    "descriptionStatus": "complete",
    "price": 1.5,
    "image": "/images/products/pan-brioche.jpg",
    "variants": [
      {
        "id": "pan-brioche-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pan-brioche-fmt-media",
            "name": "Media",
            "priceDelta": 0
          },
          {
            "id": "pan-brioche-fmt-entera",
            "name": "Entera",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "extras": [
      {
        "id": "pan-brioche-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-brioche-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-brioche-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-brioche-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-brioche-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-brioche-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-brioche-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.6
          },
          {
            "id": "pan-brioche-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "pan-brioche-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-brioche-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-brioche-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-brioche-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-brioche-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-brioche-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-brioche-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-brioche-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-brioche-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-brioche-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-brioche-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-brioche-opt-1",
        "name": "¿Añadimos huevo a tu Brioche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-brioche-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-brioche-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-brioche-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-brioche-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-brioche-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten",
      "Leche",
      "Poco picante"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": true
    },
    "available": true,
    "badge": "Vegano",
    "nombre": "Pan Brioche ",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": "Rebanadas de pan brioche tostado con los ingredientes de tu elección ",
    "precio": 1.5,
    "imagen": "/images/products/pan-brioche.jpg",
    "variantes": [
      {
        "id": "pan-brioche-format",
        "name": "Tamaño / Presentación",
        "required": true,
        "multiple": false,
        "choices": [
          {
            "id": "pan-brioche-fmt-media",
            "name": "Media",
            "priceDelta": 0
          },
          {
            "id": "pan-brioche-fmt-entera",
            "name": "Entera",
            "priceDelta": 1.5
          }
        ]
      }
    ],
    "complementos": [
      {
        "id": "pan-brioche-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-brioche-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.1
          },
          {
            "id": "pan-brioche-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-brioche-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-brioche-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-brioche-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-brioche-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-crema-de-cacahuete",
            "name": "Crema de cacahuete",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-extra-fresa-fresca",
            "name": "Extra fresa fresca",
            "priceDelta": 0.6
          },
          {
            "id": "pan-brioche-opt-0-extra-platano-fresco",
            "name": "Extra plátano fresco",
            "priceDelta": 0.6
          },
          {
            "id": "pan-brioche-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-brioche-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-brioche-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-brioche-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-brioche-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-brioche-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-brioche-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-brioche-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-brioche-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-brioche-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-brioche-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.1
          },
          {
            "id": "pan-brioche-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.1
          },
          {
            "id": "pan-brioche-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-brioche-opt-1",
        "name": "¿Añadimos huevo a tu Brioche?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-brioche-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-brioche-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-brioche-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-brioche-opt-2",
        "name": "¿Te lo preparamos para llevar?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-brioche-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten",
      "Leche",
      "Poco picante"
    ],
    "disponible": true
  },
  {
    "id": "tostadas-simples-pan-sin-gluten",
    "name": "Pan Sin Gluten",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": "Bollito",
    "descriptionStatus": "complete",
    "price": 3,
    "image": "/images/products/pan-sin-gluten.jpg",
    "variants": [],
    "extras": [
      {
        "id": "pan-sin-gluten-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-sin-gluten-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "pan-sin-gluten-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-sin-gluten-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-sin-gluten-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-sin-gluten-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-sin-gluten-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "pan-sin-gluten-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "pan-sin-gluten-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "pan-sin-gluten-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-sin-gluten-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-sin-gluten-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-sin-gluten-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-sin-gluten-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-sin-gluten-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-sin-gluten-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "pan-sin-gluten-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.25
          },
          {
            "id": "pan-sin-gluten-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.25
          },
          {
            "id": "pan-sin-gluten-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-sin-gluten-opt-1",
        "name": "¿Añadimos huevo o patatas a tu tostada?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-sin-gluten-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-sin-gluten-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-sin-gluten-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "pan-sin-gluten-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-sin-gluten-opt-2",
        "name": "Si es para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-sin-gluten-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": null,
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Pan Sin Gluten",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": "Bollito",
    "precio": 3,
    "imagen": "/images/products/pan-sin-gluten.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "pan-sin-gluten-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-sin-gluten-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "pan-sin-gluten-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-sin-gluten-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-sin-gluten-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-sin-gluten-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-sin-gluten-opt-0-champinones",
            "name": "Champiñones",
            "priceDelta": 1
          },
          {
            "id": "pan-sin-gluten-opt-0-honey-mustard",
            "name": "Honey mustard",
            "priceDelta": 1.5
          },
          {
            "id": "pan-sin-gluten-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "pan-sin-gluten-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-sin-gluten-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-sin-gluten-opt-0-melva",
            "name": "Melva ",
            "priceDelta": 2.5
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-fresa",
            "name": "Merme Fresa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-melocoton",
            "name": "Merme Melocotón",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-sin-gluten-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-sin-gluten-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-sin-gluten-opt-0-porcion-mantequilla",
            "name": "Porción Mantequilla",
            "priceDelta": 0.35
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.75
          },
          {
            "id": "pan-sin-gluten-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-sin-gluten-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-sin-gluten-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "pan-sin-gluten-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.25
          },
          {
            "id": "pan-sin-gluten-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.25
          },
          {
            "id": "pan-sin-gluten-opt-0-york",
            "name": "york",
            "priceDelta": 0.5
          }
        ]
      },
      {
        "id": "pan-sin-gluten-opt-1",
        "name": "¿Añadimos huevo o patatas a tu tostada?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-sin-gluten-opt-1-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-sin-gluten-opt-1-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-sin-gluten-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          },
          {
            "id": "pan-sin-gluten-opt-1-tortilla-francesa-2-huevos",
            "name": "Tortilla francesa (2 huevos)",
            "priceDelta": 4
          }
        ]
      },
      {
        "id": "pan-sin-gluten-opt-2",
        "name": "Si es para llevar, márcalo aquí",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-sin-gluten-opt-2-take-away",
            "name": "TAKE AWAY",
            "priceDelta": 0.1
          }
        ]
      }
    ],
    "alergenos": null,
    "disponible": true
  },
  {
    "id": "tostadas-simples-pan-bagel",
    "name": "Pan Bagel",
    "category": "Tostadas simples",
    "subcategory": "Tostadas & Panes",
    "description": null,
    "descriptionStatus": "none",
    "price": 2.6,
    "image": "/images/products/pan-bagel.jpg",
    "variants": [],
    "extras": [
      {
        "id": "pan-bagel-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-bagel-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "pan-bagel-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-bagel-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-bagel-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-bagel-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-bagel-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-bagel-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-bagel-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "pan-bagel-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-bagel-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-bagel-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-bagel-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-bagel-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-bagel-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-bagel-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-bagel-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-bagel-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-bagel-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "pan-bagel-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "pan-bagel-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "pan-bagel-opt-1",
        "name": "¿Acompañas con patatas?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-bagel-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      }
    ],
    "optionsIncomplete": false,
    "allergens": [
      "Cereales con gluten"
    ],
    "dietary": {
      "vegetarian": false,
      "vegan": false
    },
    "available": true,
    "badge": null,
    "nombre": "Pan Bagel",
    "categoria": "Tostadas simples",
    "subcategoria": "Tostadas & Panes",
    "descripcion": null,
    "precio": 2.6,
    "imagen": "/images/products/pan-bagel.jpg",
    "variantes": [],
    "complementos": [
      {
        "id": "pan-bagel-opt-0",
        "name": "Ingredientes",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-bagel-opt-0-aceite-oliva",
            "name": "Aceite Oliva",
            "priceDelta": 0.2
          },
          {
            "id": "pan-bagel-opt-0-aguacate",
            "name": "Aguacate",
            "priceDelta": 1.8
          },
          {
            "id": "pan-bagel-opt-0-bacon",
            "name": "Bacon",
            "priceDelta": 2
          },
          {
            "id": "pan-bagel-opt-0-brotes-verdes",
            "name": "Brotes Verdes",
            "priceDelta": 0.4
          },
          {
            "id": "pan-bagel-opt-0-carne-mecha",
            "name": "Carne Mechá",
            "priceDelta": 1.2
          },
          {
            "id": "pan-bagel-opt-0-huevo-plancha",
            "name": "Huevo Plancha",
            "priceDelta": 1.6
          },
          {
            "id": "pan-bagel-opt-0-huevo-rev",
            "name": "Huevo Rev",
            "priceDelta": 1.6
          },
          {
            "id": "pan-bagel-opt-0-hummus",
            "name": "Hummus",
            "priceDelta": 1.5
          },
          {
            "id": "pan-bagel-opt-0-jamon-serrano",
            "name": "Jamón Serrano",
            "priceDelta": 1
          },
          {
            "id": "pan-bagel-opt-0-mantequilla",
            "name": "Mantequilla",
            "priceDelta": 0.15
          },
          {
            "id": "pan-bagel-opt-0-merme-arandanos",
            "name": "Merme Arándanos",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-merme-ciruela",
            "name": "Merme Ciruela",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-merme-frambuesa",
            "name": "Merme Frambuesa",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-merme-mora",
            "name": "Merme Mora",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-miel",
            "name": "Miel",
            "priceDelta": 0.5
          },
          {
            "id": "pan-bagel-opt-0-mojo-picon",
            "name": "Mojo picón",
            "priceDelta": 0.7
          },
          {
            "id": "pan-bagel-opt-0-pate-iberico",
            "name": "Paté Ibérico",
            "priceDelta": 0.5
          },
          {
            "id": "pan-bagel-opt-0-pavo",
            "name": "Pavo",
            "priceDelta": 0.6
          },
          {
            "id": "pan-bagel-opt-0-queso-crema",
            "name": "Queso crema",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-queso-curado",
            "name": "Queso curado",
            "priceDelta": 0.9
          },
          {
            "id": "pan-bagel-opt-0-queso-feta",
            "name": "Queso Feta",
            "priceDelta": 1
          },
          {
            "id": "pan-bagel-opt-0-queso-fresco",
            "name": "Queso Fresco",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-queso-fundido",
            "name": "Queso Fundido",
            "priceDelta": 0.8
          },
          {
            "id": "pan-bagel-opt-0-salmon",
            "name": "Salmón",
            "priceDelta": 4
          },
          {
            "id": "pan-bagel-opt-0-siracha",
            "name": "Siracha",
            "priceDelta": 1.5
          },
          {
            "id": "pan-bagel-opt-0-tomate-rodaja",
            "name": "Tomate Rodaja",
            "priceDelta": 0.3
          },
          {
            "id": "pan-bagel-opt-0-tomate-triturado",
            "name": "Tomate Triturado",
            "priceDelta": 0.3
          }
        ]
      },
      {
        "id": "pan-bagel-opt-1",
        "name": "¿Acompañas con patatas?",
        "required": false,
        "multiple": true,
        "choices": [
          {
            "id": "pan-bagel-opt-1-racion-de-patatas-fritas",
            "name": "Ración de patatas fritas /** ",
            "priceDelta": 1.8
          }
        ]
      }
    ],
    "alergenos": [
      "Cereales con gluten"
    ],
    "disponible": true
  }
];

/**
 * Informe de importación oficial y verificación de carta.
 */
export const menuImportReport = {
  recoveredCategories: 7,
  recoveredSubcategories: 21,
  recoveredProducts: 104,
  productsWithPhoto: 104,
  productsAwaitingPhoto: 0,
  productsWithUnconfirmedPrice: 0,
  descriptionsIncomplete: 25,
  productsWithIncompleteOptions: 0,
  verifiedAt: '2026-11-18T17:00:32.914Z',
  sourceUrl: menuSourceUrl
};
