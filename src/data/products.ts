import { Language } from '../translations';

export interface Product {
  id: string;
  name: string;
  nameLocalized?: { [key in Language]: string };
  subName: { [key in Language]: string };
  group: 'Maszyny' | 'Akcesoria' | 'Kompresory';
  category: string;
  description: { [key in Language]: string };
  specs: {
    cableRange: string;
    ductRange: string;
    blowingDistance: { [key in Language]: string };
    maxPressure: { [key in Language]: string };
    weight: string;
  };
  image: string;
  gallery: string[];
  features: { [key in Language]: string[] };
}

export const products: Product[] = [
  {
    id: 'bdj-next',
    name: 'BDJ NEXT',
    subName: {
      PL: 'Nowoczesna wdmuchiwarka nowej generacji',
      EN: 'Modern next-generation blowing machine',
      DE: 'Moderne Einblasmaschine der nächsten Generation',
      ES: 'Máquina de soplado moderna de nueva generación'
    },
    group: 'Maszyny',
    category: 'Max',
    description: {
      PL: 'Łączy inteligentne systemy kontroli z potężnym napędem.',
      EN: 'Combines intelligent control systems with a powerful drive.',
      DE: 'Kombiniert intelligente Steuerungssysteme mit einem leistungsstarken Antrieb.',
      ES: 'Combina sistemas de control inteligentes con una potente propulsión.'
    },
    specs: {
      cableRange: '4 - 16 mm',
      ductRange: '7 - 50 mm',
      blowingDistance: {
        PL: 'do 2500 m',
        EN: 'up to 2500 m',
        DE: 'bis zu 2500 m',
        ES: 'hasta 2500 m'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '28 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2025/03/001-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2025/03/001-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/MAX-2-scaled.jpg'
    ],
    features: {
      PL: ['Elektroniczny licznik', 'Automatyczny docisk', 'Zapis parametrów'],
      EN: ['Electronic counter', 'Automatic pressure', 'Parameter recording'],
      DE: ['Elektronischer Zähler', 'Automatischer Druck', 'Parameteraufzeichnung'],
      ES: ['Contador electrónico', 'Presión automática', 'Registro de parámetros']
    }
  },
  {
    id: 'bdj-budget',
    name: 'BDJ BUDGET',
    subName: {
      PL: 'Funkcjonalna mikrowdmuchiwarka',
      EN: 'Functional micro-blowing machine',
      DE: 'Funktionale Mikroeinblasmaschine',
      ES: 'Micro-sopladora funcional'
    },
    group: 'Maszyny',
    category: 'Budget',
    description: {
      PL: 'Najmniejsza mikrowdmuchiwarka stworzona do budowy ostatnich odcinków sieci FTTH i nie tylko. Wyposażona w specjalne tuleje prowadzące, które umożliwiają wdmuchiwanie włókna już od Ø 0,5 mm.',
      EN: 'The smallest micro-blowing machine designed for building the last sections of FTTH networks and more. Equipped with special guide sleeves that allow fiber blowing from Ø 0.5 mm.',
      DE: 'Die kleinste Mikroeinblasmaschine, entwickelt für den Bau der letzten Abschnitte von FTTH-Netzwerken und mehr. Ausgestattet mit speziellen Führungshülsen, die das Einblasen von Fasern ab Ø 0,5 mm ermöglichen.',
      ES: 'La micro-sopladora más pequeña diseñada para la construcción de los últimos tramos de redes FTTH y más. Equipada con manguitos guía especiales que permiten el soplado de fibra desde Ø 0,5 mm.'
    },
    specs: {
      cableRange: '0,5 – 6 mm',
      ductRange: '5, 7, 10, 12, 14, 16 mm',
      blowingDistance: {
        PL: 'do 1200 m',
        EN: 'up to 1200 m',
        DE: 'bis zu 1200 m',
        ES: 'hasta 1200 m'
      },
      maxPressure: {
        PL: '10 bar',
        EN: '10 bar',
        DE: '10 bar',
        ES: '10 bar'
      },
      weight: '15 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-8-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-8-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-EasySet-3-scaled.jpg'
    ],
    features: {
      PL: ['Prosta obsługa', 'Wysoka niezawodność', 'Kompaktowe wymiary'],
      EN: ['Simple operation', 'High reliability', 'Compact dimensions'],
      DE: ['Einfache Bedienung', 'Hohe Zuverlässigkeit', 'Kompakte Abmessungen'],
      ES: ['Operación simple', 'Alta confiabilidad', 'Dimensiones compactas']
    }
  },
  {
    id: 'bdj-budget-easy-set',
    name: 'BDJ BUDGET EASYSET',
    subName: {
      PL: 'Wdmuchiwarka ze zintegrowanym napędem',
      EN: 'Blowing machine with integrated drive',
      DE: 'Einblasmaschine mit integriertem Antrieb',
      ES: 'Máquina de soplado con accionamiento integrado'
    },
    group: 'Maszyny',
    category: 'Budget',
    description: {
      PL: 'Mikrowdmuchiwarka stworzona między innymi do budowy ostatnich odcinków sieci FTTH, ale nie tylko. Konstrukcja maszyny pozwala na osiąganie większych odległości w zależności od metody wdmuchiwania. Dzięki tulejom prowadzącym można wdmuchiwać włókna już od Ø 0,5 mm. Wkrętarka w komplecie.',
      EN: 'Micro-blowing machine designed, among other things, for building the last sections of FTTH networks. The machine\'s design allows for achieving greater distances depending on the blowing method. Thanks to guide sleeves, fibers can be blown from Ø 0.5 mm. Screwdriver included.',
      DE: 'Mikroeinblasmaschine, unter anderem für den Bau der letzten Abschnitte von FTTH-Netzwerken konzipiert. Das Design der Maschine ermöglicht größere Entfernungen je nach Einblasmethode. Dank Führungshülsen können Fasern ab Ø 0,5 mm eingeblasen werden. Akkuschrauber im Lieferumfang enthalten.',
      ES: 'Micro-sopladora diseñada, entre otras cosas, para la construcción de los últimos tramos de redes FTTH. El diseño de la máquina permite alcanzar mayores distancias dependiendo del método de soplado. Gracias a los manguitos guía, las fibras se pueden soplar desde Ø 0,5 mm. Atornillador incluido.'
    },
    specs: {
      cableRange: '0,5 – 6 mm',
      ductRange: '5, 7, 10, 12, 14, 16 mm',
      blowingDistance: {
        PL: 'do 1200 m',
        EN: 'up to 1200 m',
        DE: 'bis zu 1200 m',
        ES: 'hasta 1200 m'
      },
      maxPressure: {
        PL: '10 bar',
        EN: '10 bar',
        DE: '10 bar',
        ES: '10 bar'
      },
      weight: '15.5 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-EasySet-3-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-EasySet-3-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-8-scaled.jpg'
    ],
    features: {
      PL: ['System Easy Set', 'Szybka konfiguracja', 'Ergonomiczna budowa'],
      EN: ['Easy Set system', 'Quick configuration', 'Ergonomic design'],
      DE: ['Easy Set System', 'Schnelle Konfiguration', 'Ergonomisches Design'],
      ES: ['Sistema Easy Set', 'Configuración rápida', 'Diseño ergonómico']
    }
  },
  {
    id: 'bdj-budget-plus',
    name: 'BDJ BUDGET PLUS',
    subName: {
      PL: 'Wdmuchiwarka z dzieloną głowicą',
      EN: 'Blowing machine with split head',
      DE: 'Einblasmaschine mit geteiltem Kopf',
      ES: 'Máquina de soplado con cabezal dividido'
    },
    group: 'Maszyny',
    category: 'Budget',
    description: {
      PL: 'Dzielona głowica umożliwia wyjęcie kabla z maszyny bez konieczności wykonywania cięcia. Jest to szczególnie przydatne jeżeli kabel wyposażony jest w złączkę lub chcemy wykonać wdmuchiwanie kabla w dwóch kierunkach. Dzięki odpowiedniej konstrukcji urządzenie pozwala na wdmuchiwanie włókna już od Ø 0,5mm.',
      EN: 'The split head allows the cable to be removed from the machine without having to cut it. This is particularly useful if the cable is equipped with a connector or if you want to blow the cable in two directions. Thanks to the appropriate design, the device allows fiber blowing from Ø 0.5 mm.',
      DE: 'Der geteilte Kopf ermöglicht es, das Kabel aus der Maschine zu entfernen, ohne es schneiden zu müssen. Dies ist besonders nützlich, wenn das Kabel mit einem Stecker ausgestattet ist oder wenn Sie das Kabel in zwei Richtungen einblasen möchten. Dank des entsprechenden Designs ermöglicht das Gerät das Einblasen von Fasern ab Ø 0,5 mm.',
      ES: 'El cabezal dividido permite retirar el cable de la máquina sin tener que cortarlo. Esto es particularmente útil si el cable está equipado con un conector o si se desea realizar el soplado del cable en dos direcciones. Gracias al diseño adecuado, el dispositivo permite el soplado de fibra desde Ø 0,5 mm.'
    },
    specs: {
      cableRange: '0,5 – 6 mm',
      ductRange: '5, 7, 10 mm',
      blowingDistance: {
        PL: 'do 1500 m',
        EN: 'up to 1500 m',
        DE: 'bis zu 1500 m',
        ES: 'hasta 1500 m'
      },
      maxPressure: {
        PL: '12 bar',
        EN: '12 bar',
        DE: '12 bar',
        ES: '12 bar'
      },
      weight: '18 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-Plus-1-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-Plus-1-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-Plus-EasySet-1-scaled.jpg'
    ],
    features: {
      PL: ['Wzmocniona moc', 'Dzielona głowica', 'Trwała obudowa'],
      EN: ['Reinforced power', 'Split head', 'Durable housing'],
      DE: ['Verstärkte Leistung', 'Geteilter Kopf', 'Langlebiges Gehäuse'],
      ES: ['Potencia reforzada', 'Cabezal dividido', 'Carcasa duradera']
    }
  },
  {
    id: 'bdj-budget-plus-easy-set',
    name: 'BDJ BUDGET PLUS EASYSET',
    subName: {
      PL: 'Wdmuchiwarka z dzieloną głowicą i zintegrowanym napędem',
      EN: 'Blowing machine with split head and integrated drive',
      DE: 'Einblasmaschine mit geteiltem Kopf und integriertem Antrieb',
      ES: 'Máquina de soplado con cabezal dividido y accionamiento integrado'
    },
    group: 'Maszyny',
    category: 'Budget',
    description: {
      PL: 'Dzielona głowica umożliwia wyjęcie kabla z maszyny bez konieczności wykonywania cięcia kabla. Wygodny system zintegrowanego napędu, stojak oraz możliwość wdmuchiwania w dwóch kierunkach to praktyczne rozwiązanie na ostatnich odcinkach sieci FTTH i nie tylko. Wkrętarka w komplecie.',
      EN: 'The split head allows the cable to be removed from the machine without having to cut it. A convenient integrated drive system, stand, and the ability to blow in two directions are practical solutions for the last sections of FTTH networks and more. Screwdriver included.',
      DE: 'Der geteilte Kopf ermöglicht es, das Kabel aus der Maschine zu entfernen, ohne es schneiden zu müssen. Ein praktisches integriertes Antriebssystem, ein Ständer und die Möglichkeit, in zwei Richtungen einzublasen, sind praktische Lösungen für die letzten Abschnitte von FTTH-Netzwerken und mehr. Akkuschrauber im Lieferumfang enthalten.',
      ES: 'El cabezal dividido permite retirar el cable de la máquina sin tener que cortarlo. Un cómodo sistema de accionamiento integrado, soporte y la posibilidad de soplar en dos direcciones son soluciones prácticas para los últimos tramos de redes FTTH y más. Atornillador incluido.'
    },
    specs: {
      cableRange: '0,5 – 6 mm',
      ductRange: '5, 7, 10 mm',
      blowingDistance: {
        PL: 'do 1500 m',
        EN: 'up to 1500 m',
        DE: 'bis zu 1500 m',
        ES: 'hasta 1500 m'
      },
      maxPressure: {
        PL: '12 bar',
        EN: '12 bar',
        DE: '12 bar',
        ES: '12 bar'
      },
      weight: '18.5 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-Plus-EasySet-1-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-Plus-EasySet-1-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Budget-Plus-1-scaled.jpg'
    ],
    features: {
      PL: ['Maksymalna wydajność', 'System Easy Set', 'Profesjonalne rozwiązanie'],
      EN: ['Maximum performance', 'Easy Set system', 'Professional solution'],
      DE: ['Maximale Leistung', 'Easy Set System', 'Professionelle Lösung'],
      ES: ['Máximo rendimiento', 'Sistema Easy Set', 'Solución profesional']
    }
  },
  {
    id: 'bdj-mini',
    name: 'BDJ MINI',
    subName: {
      PL: 'Wdmuchiwarka do budowy ostatnich odcinków sieci',
      EN: 'Blowing machine for building the last sections of the network',
      DE: 'Einblasmaschine für den Bau der letzten Netzabschnitte',
      ES: 'Máquina de soplado para la construcción de los últimos tramos de la red'
    },
    group: 'Maszyny',
    category: 'Mini',
    description: {
      PL: 'Jeden z mniejszych modeli wdmuchiwarek Blue Dragon Jet. Wyposażony w specjalne tuleje prowadzące, które umożliwiają wdmuchiwanie włókna już od średnicy 2,5 mm. BDJ Mini posiada Dragon Jaws. Jest to unikalny system ochrony kabla poprzez precyzyjne prowadzenie ruchomej części podajnika oraz tzw. Szczęki Smoka. Wyprofilowane, ostre zęby zapewniają pewne mocowanie rurek, niepowodując zmniejszenia przekroju mikrorurki.',
      EN: 'One of the smaller models of Blue Dragon Jet blowing machines. Equipped with special guide sleeves that allow fiber blowing from a diameter of 2.5 mm. BDJ Mini features Dragon Jaws. This is a unique cable protection system through precise guidance of the moving part of the feeder and the so-called Dragon Jaws. Profiled, sharp teeth ensure secure tube mounting without reducing the micro-tube cross-section.',
      DE: 'Eines der kleineren Modelle der Blue Dragon Jet Einblasmaschinen. Ausgestattet mit speziellen Führungshülsen, die das Einblasen von Fasern ab einem Durchmesser von 2,5 mm ermöglichen. BDJ Mini verfügt über Dragon Jaws. Dies ist ein einzigartiges Kabelschutzsystem durch präzise Führung des beweglichen Teils der Zuführung und der sogenannten Dragon Jaws. Profilierte, scharfe Zähne sorgen für eine sichere Rohrbefestigung, ohne den Querschnitt des Mikrorohrs zu verringern.',
      ES: 'Uno de los modelos más pequeños de máquinas de soplado Blue Dragon Jet. Equipado con manguitos guía especiales que permiten el soplado de fibra desde un diámetro de 2,5 mm. BDJ Mini cuenta con Dragon Jaws. Este es un sistema único de protección de cable mediante el guiado preciso de la parte móvil del alimentador y las llamadas Dragon Jaws. Los dientes afilados y perfilados aseguran un montaje seguro del tubo sin reducir la sección transversal del micro-tubo.'
    },
    specs: {
      cableRange: '2,5 – 10 mm',
      ductRange: '5, 7, 10, 12, 14, 16 mm',
      blowingDistance: {
        PL: 'do 700 m',
        EN: 'up to 700 m',
        DE: 'bis zu 700 m',
        ES: 'hasta 700 m'
      },
      maxPressure: {
        PL: '10 bar',
        EN: '10 bar',
        DE: '10 bar',
        ES: '10 bar'
      },
      weight: '4.5 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Mini-2-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Mini-2-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/BDJ-Mini-Counter-1-scaled.jpg'
    ],
    features: {
      PL: ['Dragon Jaws', 'Niska waga', 'Wymienne rolki'],
      EN: ['Dragon Jaws', 'Low weight', 'Interchangeable rollers'],
      DE: ['Dragon Jaws', 'Geringes Gewicht', 'Austauschbare Rollen'],
      ES: ['Dragon Jaws', 'Bajo peso', 'Rodillos intercambiables']
    }
  },
  {
    id: 'bdj-mini-counter',
    name: 'BDJ MINI COUNTER',
    subName: {
      PL: 'Wdmuchiwarka z licznikiem długości',
      EN: 'Blowing machine with length counter',
      DE: 'Einblasmaschine mit Längenzähler',
      ES: 'Máquina de soplado con contador de longitud'
    },
    group: 'Maszyny',
    category: 'Mini',
    description: {
      PL: 'Wdmuchiwarka do mikrokabli BDJ Mini została stworzona dobudowy ostatnich odcinków FTTH oraz sieci rozdzielczych. Dzięki tulejom prowadzącym pozwala na wdmuchiwanie włókna już od średnicy 2,5 mm. Praktyczny licznik długości umożliwia odczytanie długości wdmuchniętego kabla.',
      EN: 'The BDJ Mini micro-cable blowing machine was created for building the last FTTH sections and distribution networks. Thanks to guide sleeves, it allows fiber blowing from a diameter of 2.5 mm. A practical length counter allows reading the length of the blown cable.',
      DE: 'Die BDJ Mini Mikrokabel-Einblasmaschine wurde für den Bau der letzten FTTH-Abschnitte und Verteilnetze entwickelt. Dank Führungshülsen ermöglicht sie das Einblasen von Fasern ab einem Durchmesser von 2,5 mm. Ein praktischer Längenzähler ermöglicht das Ablesen der Länge des eingeblasenen Kabels.',
      ES: 'La máquina de soplado de micro-cables BDJ Mini fue creada para la construcción de los últimos tramos de FTTH y redes de distribución. Gracias a los manguitos guía, permite el soplado de fibra desde un diámetro de 2,5 mm. Un práctico contador de longitud permite leer la longitud del cable soplado.'
    },
    specs: {
      cableRange: '2,5 – 10 mm',
      ductRange: '5, 7, 10, 12, 14, 16 mm',
      blowingDistance: {
        PL: 'do 700 m',
        EN: 'up to 700 m',
        DE: 'bis zu 700 m',
        ES: 'hasta 700 m'
      },
      maxPressure: {
        PL: '10 bar',
        EN: '10 bar',
        DE: '10 bar',
        ES: '10 bar'
      },
      weight: '5.2 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/BDJ-Mini-Counter-1-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/BDJ-Mini-Counter-1-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Mini-2-scaled.jpg'
    ],
    features: {
      PL: ['Zintegrowany licznik', 'Przenośna konstrukcja', 'Wysoka precyzja'],
      EN: ['Integrated counter', 'Portable design', 'High precision'],
      DE: ['Integrierter Zähler', 'Tragbares Design', 'Hohe Präzision'],
      ES: ['Contador integrado', 'Diseño portátil', 'Alta precisión']
    }
  },
  {
    id: 'bdj-extended',
    name: 'BDJ EXTENDED',
    subName: {
      PL: 'Wdmuchiwarka z przełącznikiem kierunkowym',
      EN: 'Blowing machine with directional switch',
      DE: 'Einblasmaschine mit Richtungsschalter',
      ES: 'Máquina de soplado con interruptor direccional'
    },
    group: 'Maszyny',
    category: 'Extended',
    description: {
      PL: 'Wdmuchiwarka przeznaczona do wdmuchiwania mikrokabli. Model wdmuchiwarki światłowodowej ze zwiększonym zakresem i z przełącznikiem kierunkowym, który umożliwia wycofanie kabla. Solidna i prosta konstrukcja zapewnia łatwość obsługi. BDJ EXTENDED to niezawodna i wytrzymała maszyna.',
      EN: 'Blowing machine designed for blowing micro-cables. A fiber optic blowing machine model with an increased range and a directional switch that allows the cable to be retracted. Solid and simple design ensures ease of use. BDJ EXTENDED is a reliable and durable machine.',
      DE: 'Einblasmaschine zum Einblasen von Mikrokabeln. Ein Glasfaser-Einblasmaschinenmodell mit erhöhter Reichweite und einem Richtungsschalter, der das Zurückziehen des Kabels ermöglicht. Solides und einfaches Design sorgt für Benutzerfreundlichkeit. BDJ EXTENDED ist eine zuverlässige und langlebige Maschine.',
      ES: 'Máquina de soplado diseñada para el soplado de micro-cables. Un modelo de máquina de soplado de fibra óptica con un rango aumentado y un interruptor direccional que permite retraer el cable. El diseño sólido y simple asegura la facilidad de uso. BDJ EXTENDED es una máquina confiable y duradera.'
    },
    specs: {
      cableRange: '2,5 - 12 mm',
      ductRange: '5, 7, 10, 12, 14, 16, 20 mm',
      blowingDistance: {
        PL: 'do 3000 m',
        EN: 'up to 3000 m',
        DE: 'bis zu 3000 m',
        ES: 'hasta 3000 m'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '32 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2026/02/image.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2026/02/image.png'
    ],
    features: {
      PL: ['Przełącznik kierunkowy', 'Zwiększony zasięg', 'Solidna konstrukcja'],
      EN: ['Directional switch', 'Increased range', 'Solid construction'],
      DE: ['Richtungsschalter', 'Erhöhte Reichweite', 'Solide Konstruktion'],
      ES: ['Interruptor direccional', 'Rango aumentado', 'Construcción sólida']
    }
  },
  {
    id: 'bdj-max',
    name: 'BDJ MAX',
    subName: {
      PL: 'Najpotężniejsza wdmuchiwarka magistralna',
      EN: 'The most powerful trunk blowing machine',
      DE: 'Die leistungsstärkste Stammeinblasmaschine',
      ES: 'La máquina de soplado de troncales más potente'
    },
    group: 'Maszyny',
    category: 'Max',
    description: {
      PL: 'Najpotężniejsza wdmuchiwarka do budowy magistrali światłowodowych. Przeznaczona do najcięższych zadań.',
      EN: 'The most powerful blowing machine for building fiber optic trunks. Designed for the toughest tasks.',
      DE: 'Die leistungsstärkste Einblasmaschine für den Bau von Glasfaserstämmen. Entwickelt für die härtesten Aufgaben.',
      ES: 'La máquina de soplado más potente para la construcción de troncales de fibra óptica. Diseñada para las tareas más difíciles.'
    },
    specs: {
      cableRange: '8 - 25 mm',
      ductRange: '32 - 63 mm',
      blowingDistance: {
        PL: 'do 4000 m',
        EN: 'up to 4000 m',
        DE: 'bis zu 4000 m',
        ES: 'hasta 4000 m'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '55 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/MAX-2-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/MAX-2-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2025/03/001-scaled.jpg'
    ],
    features: {
      PL: ['Gąsienicowy system podawania', 'Ogromna siła pchająca', 'Praca ciągła'],
      EN: ['Crawler feeding system', 'Huge pushing force', 'Continuous operation'],
      DE: ['Raupenzuführsystem', 'Enorme Schubkraft', 'Dauerbetrieb'],
      ES: ['Sistema de alimentación de orugas', 'Enorme fuerza de empuje', 'Operación continua']
    }
  },
  {
    id: 'bdj-hydro-belt-cable',
    name: 'BDJ HYDRO BELT CABLE',
    subName: {
      PL: 'Wdmuchiwarka hydrauliczna pasowa',
      EN: 'Hydraulic belt blowing machine',
      DE: 'Hydraulische Bandeinblasmaschine',
      ES: 'Máquina de soplado hidráulica de banda'
    },
    group: 'Maszyny',
    category: 'Hydro',
    description: {
      PL: 'Wdmuchiwarka hydrauliczna z pasowym systemem podawania kabla. Niezawodna w każdych warunkach.',
      EN: 'Hydraulic blowing machine with a belt cable feeding system. Reliable in all conditions.',
      DE: 'Hydraulische Einblasmaschine mit Bandkabelzuführsystem. Zuverlässig unter allen Bedingungen.',
      ES: 'Máquina de soplado hidráulica con sistema de alimentación de cable por banda. Confiable en todas las condiciones.'
    },
    specs: {
      cableRange: '6 - 20 mm',
      ductRange: '25 - 50 mm',
      blowingDistance: {
        PL: 'do 3500 m',
        EN: 'up to 3500 m',
        DE: 'bis zu 3500 m',
        ES: 'hasta 3500 m'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '42 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Hydro-1-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Hydro-1-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Hydrochain-1-scaled.jpg'
    ],
    features: {
      PL: ['Napęd hydrauliczny', 'System pasowy', 'Wysoka odporność'],
      EN: ['Hydraulic drive', 'Belt system', 'High resistance'],
      DE: ['Hydraulischer Antrieb', 'Bandsystem', 'Hohe Widerstandsfähigkeit'],
      ES: ['Accionamiento hidráulico', 'Sistema de banda', 'Alta resistencia']
    }
  },
  {
    id: 'bdj-hydro-chain-cable',
    name: 'BDJ HYDRO CHAIN CABLE',
    subName: {
      PL: 'Wdmuchiwarka hydrauliczna łańcuchowa',
      EN: 'Hydraulic chain blowing machine',
      DE: 'Hydraulische Ketteneinblasmaschine',
      ES: 'Máquina de soplado hidráulica de cadena'
    },
    group: 'Maszyny',
    category: 'Hydro',
    description: {
      PL: 'Wersja hydrauliczna z łańcuchowym systemem podawania, zapewniającym maksymalną przyczepność kabla.',
      EN: 'Hydraulic version with a chain feeding system, ensuring maximum cable grip.',
      DE: 'Hydraulische Version mit Kettenzuführsystem für maximalen Kabelgrip.',
      ES: 'Versión hidráulica con sistema de alimentación de cadena, que garantiza el máximo agarre del cable.'
    },
    specs: {
      cableRange: '6 - 20 mm',
      ductRange: '25 - 50 mm',
      blowingDistance: {
        PL: 'do 3500 m',
        EN: 'up to 3500 m',
        DE: 'bis zu 3500 m',
        ES: 'hasta 3500 m'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '45 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Hydrochain-1-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Hydrochain-1-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Hydro-1-scaled.jpg'
    ],
    features: {
      PL: ['Napęd łańcuchowy', 'Maksymalna przyczepność', 'Do trudnych tras'],
      EN: ['Chain drive', 'Maximum grip', 'For difficult routes'],
      DE: ['Kettenantrieb', 'Maximaler Grip', 'Für schwierige Strecken'],
      ES: ['Accionamiento por cadena', 'Agarre máximo', 'Para rutas difíciles']
    }
  },
  {
    id: 'bdj-hydro-chain-multi-tube',
    name: 'BDJ HYDRO CHAIN MULTI TUBE',
    subName: {
      PL: 'Wdmuchiwarka do pakietów mikrorurek',
      EN: 'Blowing machine for micro-tube bundles',
      DE: 'Einblasmaschine für Mikrorohrbündel',
      ES: 'Máquina de soplado para paquetes de micro-tubos'
    },
    group: 'Maszyny',
    category: 'Hydro',
    description: {
      PL: 'Specjalistyczna wdmuchiwarka do pakietów mikrorurek. Pozwala na jednoczesne wdmuchiwanie wielu rurek.',
      EN: 'Specialized blowing machine for micro-tube bundles. Allows simultaneous blowing of multiple tubes.',
      DE: 'Spezialisierte Einblasmaschine für Mikrorohrbündel. Ermöglicht das gleichzeitige Einblasen mehrerer Rohre.',
      ES: 'Máquina de soplado especializada para paquetes de micro-tubos. Permite el soplado simultáneo de múltiples tubos.'
    },
    specs: {
      cableRange: 'Multi Tube',
      ductRange: '32 - 63 mm',
      blowingDistance: {
        PL: 'do 2000 m',
        EN: 'up to 2000 m',
        DE: 'bis zu 2000 m',
        ES: 'hasta 2000 m'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '48 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/BDJ-Hydro-Chain-Multi-Tube-1-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/BDJ-Hydro-Chain-Multi-Tube-1-scaled.jpg'
    ],
    features: {
      PL: ['Obsługa wielu rurek', 'Napęd łańcuchowy', 'Precyzyjne prowadzenie'],
      EN: ['Multi-tube support', 'Chain drive', 'Precise guidance'],
      DE: ['Unterstützung für mehrere Rohre', 'Kettenantrieb', 'Präzise Führung'],
      ES: ['Soporte para múltiples tubos', 'Accionamiento por cadena', 'Guiado preciso']
    }
  },
  {
    id: 'acc-head-m',
    name: 'Nowa głowica „M”',
    nameLocalized: {
      PL: 'Nowa głowica „M”',
      EN: 'New Head “M”',
      DE: 'Neuer Kopf „M”',
      ES: 'Nueva Cabeza “M”'
    },
    subName: {
      PL: 'Innowacja, która ułatwi Twoją pracę',
      EN: 'Innovation that will make your work easier',
      DE: 'Innovation, die Ihre Arbeit erleichtern wird',
      ES: 'Innovación que facilitará tu trabajo'
    },
    group: 'Akcesoria',
    category: 'Głowice',
    description: {
      PL: 'Rewolucyjny system zaprojektowany z myślą o szybkości i łatwości obsługi – po prostu zamknij i wdmuchuj! (Just Close And Blow). Beznarzędziowy system obsługi, szybkie przygotowanie do pracy, ulepszone uszczelnienie i dłuższe tuleje prowadzące kabel.',
      EN: 'A revolutionary system designed for speed and ease of use – just close and blow! (Just Close And Blow). Tool-free operation system, quick preparation for work, improved sealing, and longer cable guide sleeves.',
      DE: 'Ein revolutionäres System, das auf Geschwindigkeit und Benutzerfreundlichkeit ausgelegt ist – einfach schließen und einblasen! (Just Close And Blow). Werkzeugloses Bediensystem, schnelle Arbeitsvorbereitung, verbesserte Abdichtung und längere Kabelführungshülsen.',
      ES: 'Un sistema revolucionario diseñado para la velocidad y la facilidad de uso: ¡simplemente cierre y sople! (Just Close And Blow). Sistema de operación sin herramientas, preparación rápida para el trabajo, sellado mejorado y manguitos guía de cable más largos.'
    },
    specs: {
      cableRange: 'Zależnie od modelu',
      ductRange: 'Zależnie od modelu',
      blowingDistance: {
        PL: 'N/A',
        EN: 'N/A',
        DE: 'N/A',
        ES: 'N/A'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '1.2 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2026/04/Nowy-projekt.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2026/04/Nowy-projekt.png',
      'https://bluedragonjet.com/wp-content/uploads/2026/04/DSC03089-scaled.jpg'
    ],
    features: {
      PL: ['Beznarzędziowa obsługa', 'Szybkie zamykanie dźwignią', 'Ulepszona szczelność'],
      EN: ['Tool-free operation', 'Quick lever closing', 'Improved tightness'],
      DE: ['Werkzeuglose Bedienung', 'Schneller Hebelverschluss', 'Verbesserte Dichtheit'],
      ES: ['Operación sin herramientas', 'Cierre rápido por palanca', 'Estanqueidad mejorada']
    }
  },
  {
    id: 'bdj-brain',
    name: 'Rejestrator BDJ Brain',
    nameLocalized: {
      PL: 'Rejestrator BDJ Brain',
      EN: 'BDJ Brain Recorder',
      DE: 'BDJ Brain Aufzeichnungsgerät',
      ES: 'Registrador BDJ Brain'
    },
    subName: {
      PL: 'Inteligentny system rejestracji parametrów',
      EN: 'Intelligent parameter registration system',
      DE: 'Intelligentes Parameterregistrierungssystem',
      ES: 'Sistema inteligente de registro de parámetros'
    },
    group: 'Akcesoria',
    category: 'Elektronika',
    description: {
      PL: 'Urządzenie rejestrujące, które pozwala na zewidencjonowanie i zapis parametrów procesu wdmuchiwania. Parametry zapisywane są w pamięci urządzenia oraz na pendrivie w postaci pliku .pdf. Zestaw spełnia wytyczne Deutsche Telekom.',
      EN: 'A recording device that allows for documenting and saving the parameters of the blowing process. Parameters are saved in the device memory and on a flash drive in the form of a .pdf file. The set meets Deutsche Telekom guidelines.',
      DE: 'Ein Aufzeichnungsgerät, mit dem die Parameter des Einblasvorgangs dokumentiert und gespeichert werden können. Die Parameter werden im Gerätespeicher und auf einem USB-Stick als .pdf-Datei gespeichert. Das Set entspricht den Richtlinien der Deutschen Telekom.',
      ES: 'Un dispositivo de registro que permite documentar y guardar los parámetros del proceso de soplado. Los parámetros se guardan en la memoria del dispositivo y en una unidad flash en forma de archivo .pdf. El conjunto cumple con las directrices de Deutsche Telekom.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: 'N/A',
        EN: 'N/A',
        DE: 'N/A',
        ES: 'N/A'
      },
      maxPressure: {
        PL: 'Monitorowane',
        EN: 'Monitored',
        DE: 'Überwacht',
        ES: 'Monitoreado'
      },
      weight: '3.5 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/BRAIN-3-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/BRAIN-3-scaled.jpg'
    ],
    features: {
      PL: ['Zapis GPS', 'Raporty PDF', 'Zgodność z Deutsche Telekom'],
      EN: ['GPS recording', 'PDF reports', 'Deutsche Telekom compliance'],
      DE: ['GPS-Aufzeichnung', 'PDF-Berichte', 'Deutsche Telekom Konformität'],
      ES: ['Registro GPS', 'Informes PDF', 'Cumplimiento con Deutsche Telekom']
    }
  },
  {
    id: 'bdj-brain-external',
    name: 'BDJ Brain External Device',
    subName: {
      PL: 'Przystawka pomiarowa do rejestratora',
      EN: 'Measuring attachment for the recorder',
      DE: 'Messaufsatz für den Rekorder',
      ES: 'Accesorio de medición para el registrador'
    },
    group: 'Akcesoria',
    category: 'Elektronika',
    description: {
      PL: 'Umożliwia współpracę rejestratora BDJ Brain z dowolną wdmuchiwarką światłowodową. Precyzyjnie przekazuje informacje o długości oraz prędkości wdmuchiwanego kabla. Otwierana pokrywa umożliwia wyjęcie kabla w dowolnym momencie.',
      EN: 'Enables the BDJ Brain recorder to work with any fiber optic blowing machine. Precisely transmits information about the length and speed of the blown cable. The opening cover allows the cable to be removed at any time.',
      DE: 'Ermöglicht die Zusammenarbeit des BDJ Brain Rekorders mit jeder Glasfaser-Einblasmaschine. Überträgt präzise Informationen über Länge und Geschwindigkeit des eingeblasenen Kabels. Der Klappdeckel ermöglicht es, das Kabel jederzeit zu entnehmen.',
      ES: 'Permite que el registrador BDJ Brain funcione con cualquier máquina de soplado de fibra óptica. Transmite con precisión información sobre la longitud y la velocidad del cable soplado. La tapa de apertura permite retirar el cable en cualquier momento.'
    },
    specs: {
      cableRange: 'Wszystkie',
      ductRange: 'N/A',
      blowingDistance: {
        PL: 'Monitorowane',
        EN: 'Monitored',
        DE: 'Überwacht',
        ES: 'Monitoreado'
      },
      maxPressure: {
        PL: 'N/A',
        EN: 'N/A',
        DE: 'N/A',
        ES: 'N/A'
      },
      weight: '2.8 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2023/05/DSC02548-scaled.jpg',
    gallery: ['https://bluedragonjet.com/wp-content/uploads/2023/05/DSC02548-scaled.jpg'],
    features: {
      PL: ['Uniwersalna współpraca', 'Precyzyjny pomiar', 'Wygodne mocowanie'],
      EN: ['Universal cooperation', 'Precise measurement', 'Convenient mounting'],
      DE: ['Universelle Zusammenarbeit', 'Präzise Messung', 'Bequeme Montage'],
      ES: ['Cooperación universal', 'Medición precisa', 'Montaje conveniente']
    }
  },
  {
    id: 'acc-y-connector',
    name: 'Złącze Y BDJ',
    nameLocalized: {
      PL: 'Złącze Y BDJ',
      EN: 'BDJ Y-Connector',
      DE: 'BDJ Y-Verbinder',
      ES: 'Conector Y BDJ'
    },
    subName: {
      PL: 'Dodmuchaj drugi kabel do rury',
      EN: 'Blow a second cable into the duct',
      DE: 'Zweites Kabel in das Rohr einblasen',
      ES: 'Soplar un segundo cable en el conducto'
    },
    group: 'Kompresory',
    category: 'Osprzęt',
    description: {
      PL: 'Umożliwia dodmuchanie drugiego kabla do rury osłonowej, w której jest już jeden kabel. Możliwe jest także wdmuchiwanie dwóch kabli na raz lub kabla i mikrorurek. W komplecie zestaw uchwytów i uszczelek do rur Ø32, 40, 50 mm.',
      EN: 'Allows blowing a second cable into a protection duct that already contains one cable. It is also possible to blow two cables at once or a cable and micro-tubes. Includes a set of holders and seals for Ø32, 40, 50 mm ducts.',
      DE: 'Ermöglicht das Einblasen eines zweiten Kabels in ein Schutzrohr, das bereits ein Kabel enthält. Es ist auch möglich, zwei Kabel gleichzeitig oder ein Kabel und Mikrorohre einzublasen. Enthält einen Satz Halterungen und Dichtungen für Ø32, 40, 50 mm Rohre.',
      ES: 'Permite soplar un segundo cable en un conducto de protección que ya contiene un cable. También es posible soplar dos cables a la vez o un cable y micro-tubos. Incluye un juego de soportes y sellos para conductos de Ø32, 40, 50 mm.'
    },
    specs: {
      cableRange: '10 - 17 mm',
      ductRange: '32, 40, 50 mm',
      blowingDistance: {
        PL: 'N/A',
        EN: 'N/A',
        DE: 'N/A',
        ES: 'N/A'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: '4.5 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Zlacze-Y-4-scaled.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Zlacze-Y-4-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Zlacze-Y-3-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Zlacze-Y-2-scaled.jpg',
      'https://bluedragonjet.com/wp-content/uploads/2022/12/Zlacze-Y-1-scaled.jpg'
    ],
    features: {
      PL: ['Dodmuchanie drugiego kabla', 'Zestaw uszczelek w komplecie', 'Solidna konstrukcja'],
      EN: ['Blowing a second cable', 'Seal kit included', 'Solid construction'],
      DE: ['Einblasen eines zweiten Kabels', 'Dichtungssatz enthalten', 'Solide Konstruktion'],
      ES: ['Soplado de un segundo cable', 'Kit de sellado incluido', 'Construcción sólida']
    }
  },
  {
    id: 'acc-lubricant',
    name: 'PRELUBE 5000',
    subName: {
      PL: 'Zmniejsz tarcie, zwiększ zasięg',
      EN: 'Reduce friction, increase range',
      DE: 'Reibung reduzieren, Reichweite erhöhen',
      ES: 'Reduce la fricción, aumenta el rango'
    },
    group: 'Akcesoria',
    category: 'Chemia',
    description: {
      PL: 'Specjalistyczny środek poślizgowy zmniejszający tarcie podczas wdmuchiwania kabli światłowodowych.',
      EN: 'Specialized lubricant reducing friction during fiber optic cable blowing.',
      DE: 'Spezialisierter Schmierstoff zur Reibungsreduzierung beim Einblasen von Glasfaserkabeln.',
      ES: 'Lubricante especializado que reduce la fricción durante el soplado de cables de fibra óptica.'
    },
    specs: {
      cableRange: 'Wszystkie',
      ductRange: 'Wszystkie',
      blowingDistance: {
        PL: '+30% zasięgu',
        EN: '+30% range',
        DE: '+30% Reichweite',
        ES: '+30% de rango'
      },
      maxPressure: {
        PL: 'N/A',
        EN: 'N/A',
        DE: 'N/A',
        ES: 'N/A'
      },
      weight: '1 kg / 5 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2022/12/Plyn-poslizgowy-do-mikrokabli-PRELUBE-5000-1-scaled.jpg',
    gallery: ['https://bluedragonjet.com/wp-content/uploads/2022/12/Plyn-poslizgowy-do-mikrokabli-PRELUBE-5000-1-scaled.jpg'],
    features: {
      PL: ['Zmniejsza tarcie', 'Bezpieczny dla powłok', 'Wysoka wydajność'],
      EN: ['Reduces friction', 'Safe for coatings', 'High efficiency'],
      DE: ['Reduziert Reibung', 'Sicher für Beschichtungen', 'Hohe Effizienz'],
      ES: ['Reduce la fricción', 'Seguro para recubrimientos', 'Alta eficiencia']
    }
  },
  {
    id: 'acc-compressor',
    name: 'Dragon Air',
    subName: {
      PL: 'Niezawodne źródło zasilania',
      EN: 'Reliable power source',
      DE: 'Zuverlässige Stromquelle',
      ES: 'Fuente de energía confiable'
    },
    group: 'Kompresory',
    category: 'Zasilanie',
    description: {
      PL: 'Wydajny kompresor spalinowy dedykowany do pracy z wdmuchiwarkami Blue Dragon Jet.',
      EN: 'Efficient combustion compressor dedicated to working with Blue Dragon Jet blowing machines.',
      DE: 'Effizienter Verbrennungskompressor für die Arbeit mit Blue Dragon Jet Einblasmaschinen.',
      ES: 'Compresor de combustión eficiente dedicado a trabajar con máquinas de soplado Blue Dragon Jet.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: 'N/A',
        EN: 'N/A',
        DE: 'N/A',
        ES: 'N/A'
      },
      maxPressure: {
        PL: '14 bar',
        EN: '14 bar',
        DE: '14 bar',
        ES: '14 bar'
      },
      weight: '750 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2026/04/IMG_334711487887014524-1.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2026/04/IMG_334711487887014524-1.png',
      'https://bluedragonjet.com/wp-content/uploads/2026/04/IMG_7918899856072071461.png',
      'https://bluedragonjet.com/wp-content/uploads/2026/04/IMG_8773619371108334321-1.png'
    ],
    features: {
      PL: ['Wysoka wydajność', 'Mobilność', 'Niskie spalanie'],
      EN: ['High efficiency', 'Mobility', 'Low fuel consumption'],
      DE: ['Hohe Effizienz', 'Mobilität', 'Niedriger Kraftstoffverbrauch'],
      ES: ['Alta eficiencia', 'Movilidad', 'Bajo consumo de combustible']
    }
  },
  {
    id: 'atmos-pdh76',
    name: 'Kompresor ATMOS PDH 76',
    subName: {
      PL: 'Mobilna sprężarka śrubowa',
      EN: 'Mobile screw compressor',
      DE: 'Mobiler Schraubenkompressor',
      ES: 'Compresor de tornillo móvil'
    },
    group: 'Kompresory',
    category: 'ATMOS',
    description: {
      PL: 'Sprężarki serii ATMOS PDP można łatwo dostosować do różnych potrzeb. W zależności od lokalizacji i wymagań klienta dostępne są różne opcje, takie jak chłodnica końcowa, wymiennik ciepła, tace ociekowe na olej chroniące wrażliwe środowiska, zawór Chalwyn i iskiernik do pracy w niebezpiecznych warunkach, na przykład w rafineriach. Dedykowany dla: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      EN: 'ATMOS PDP series compressors can be easily adapted to various needs. Depending on the location and customer requirements, different options are available: aftercooler, heat exchanger, oil drip trays for sensitive environments, Chalwyn valve and spark arrester for hazardous conditions such as refineries. Dedicated for: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      DE: 'Kompressoren der ATMOS PDP-Serie lassen sich leicht an verschiedene Anforderungen anpassen. Je nach Standort und Kundenanforderungen stehen verschiedene Optionen zur Verfügung: Nachkühler, Wärmetauscher, Ölauffangwannen, Chalwyn-Ventil und Funkenfänger für gefährliche Umgebungen wie Raffinerien. Geeignet für: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      ES: 'Los compresores de la serie ATMOS PDP se pueden adaptar fácilmente a diversas necesidades. Según la ubicación y los requisitos del cliente, se dispone de opciones como postenfriador, intercambiador de calor, bandejas anti-goteo de aceite, válvula Chalwyn y apagachispas para entornos peligrosos como refinerías. Dedicado para: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: '7,6 m³/min',
        EN: '7.6 m³/min',
        DE: '7,6 m³/min',
        ES: '7,6 m³/min'
      },
      maxPressure: {
        PL: '7 bar',
        EN: '7 bar',
        DE: '7 bar',
        ES: '7 bar'
      },
      weight: 'N/A'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2024/07/1.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2024/07/1.png',
      'https://bluedragonjet.com/wp-content/uploads/2024/07/3.png'
    ],
    features: {
      PL: ['Konfigurowalny osprzęt', 'Praca w trudnych warunkach', 'Wydajność 7,6 m³/min'],
      EN: ['Configurable accessories', 'Operation in harsh conditions', 'Flow 7.6 m³/min'],
      DE: ['Konfigurierbares Zubehör', 'Betrieb unter schwierigen Bedingungen', 'Förderleistung 7,6 m³/min'],
      ES: ['Accesorios configurables', 'Operación en condiciones difíciles', 'Caudal 7,6 m³/min']
    }
  },
  {
    id: 'atmos-pdp50',
    name: 'Kompresor ATMOS PDP 50',
    subName: {
      PL: 'Najnowszy model serii PDP',
      EN: 'Latest PDP series model',
      DE: 'Neuestes Modell der PDP-Serie',
      ES: 'Último modelo de la serie PDP'
    },
    group: 'Kompresory',
    category: 'ATMOS',
    description: {
      PL: 'ATMOS PDP 50 to najnowszy model z popularnej serii, stworzony z myślą o europejskich klientach i zgodności z najnowszymi normami ochrony środowiska. Oferuje zakres ciśnień roboczych: 7, 10, 12 i 14 barów, co czyni ją idealną do różnorodnych zastosowań. Wyposażona w elektroniczny system sterowania monitorujący kluczowe parametry w czasie rzeczywistym. Wbudowany zbiornik paliwa pozwala na 8-godzinną pracę. Dedykowany dla: BDJ STANDARD, BDJ EXTENDED.',
      EN: 'The ATMOS PDP 50 is the latest model in the popular series, designed for European customers and compliance with the latest environmental standards. It offers working pressure ranges of 7, 10, 12 and 14 bar, making it ideal for various applications. Equipped with an electronic control system monitoring key parameters in real time. Built-in fuel tank allows 8 hours of operation. Dedicated for: BDJ STANDARD, BDJ EXTENDED.',
      DE: 'Der ATMOS PDP 50 ist das neueste Modell der beliebten Serie, entwickelt für europäische Kunden und Konformität mit den neuesten Umweltnormen. Er bietet Arbeitsdruckbereiche von 7, 10, 12 und 14 bar. Ausgestattet mit einem elektronischen Steuerungssystem zur Echtzeitüberwachung. Eingebauter Kraftstofftank ermöglicht 8-stündigen Betrieb. Geeignet für: BDJ STANDARD, BDJ EXTENDED.',
      ES: 'El ATMOS PDP 50 es el modelo más reciente de la popular serie, diseñado para clientes europeos y conformidad con las últimas normas ambientales. Ofrece rangos de presión de trabajo de 7, 10, 12 y 14 bar. Equipado con un sistema de control electrónico que monitorea parámetros clave en tiempo real. El depósito de combustible integrado permite 8 horas de operación. Dedicado para: BDJ STANDARD, BDJ EXTENDED.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: '3 m³/min',
        EN: '3 m³/min',
        DE: '3 m³/min',
        ES: '3 m³/min'
      },
      maxPressure: {
        PL: '14 bar',
        EN: '14 bar',
        DE: '14 bar',
        ES: '14 bar'
      },
      weight: 'N/A'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2024/07/2.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2024/07/2.png'
    ],
    features: {
      PL: ['Ciśnienie 7–14 bar', 'Elektroniczny system sterowania', '8h praca na jednym zbiorniku'],
      EN: ['7–14 bar pressure range', 'Electronic control system', '8h operation on one tank'],
      DE: ['7–14 bar Druckbereich', 'Elektronisches Steuerungssystem', '8h Betrieb pro Tank'],
      ES: ['Rango de presión 7–14 bar', 'Sistema de control electrónico', '8h de operación por depósito']
    }
  },
  {
    id: 'atmos-pdp20',
    name: 'Kompresor ATMOS PDP20',
    subName: {
      PL: 'Sprężarka z silnikiem Perkins',
      EN: 'Compressor with Perkins engine',
      DE: 'Kompressor mit Perkins-Motor',
      ES: 'Compresor con motor Perkins'
    },
    group: 'Kompresory',
    category: 'ATMOS',
    description: {
      PL: 'Kompresor mobilny renomowanej firmy ATMOS CHRÁST, model PDP20 z silnikiem diesla Perkins 403J-11. Wyróżnia się trwałością i doskonałymi parametrami umożliwiającymi pracę nawet w najbardziej wymagających warunkach. Wyposażony w układ łagodnego rozruchu – kompresor po uruchomieniu pracuje na biegu jałowym, osiągając właściwe parametry ciśnienia i temperatury oleju. Dedykowany dla: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      EN: 'Mobile compressor from the renowned ATMOS CHRÁST company, model PDP20 with a Perkins 403J-11 diesel engine. Distinguished by durability and excellent parameters enabling operation even in the most demanding conditions. Equipped with a soft-start system – after starting, the compressor runs at idle to reach proper pressure and oil temperature. Dedicated for: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      DE: 'Mobiler Kompressor des renommierten Unternehmens ATMOS CHRÁST, Modell PDP20 mit Perkins 403J-11 Dieselmotor. Ausgezeichnet durch Langlebigkeit und hervorragende Parameter auch unter anspruchsvollsten Bedingungen. Ausgestattet mit Sanftanlaufsystem. Geeignet für: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      ES: 'Compresor móvil de la reconocida empresa ATMOS CHRÁST, modelo PDP20 con motor diésel Perkins 403J-11. Distinguido por su durabilidad y excelentes parámetros incluso en las condiciones más exigentes. Equipado con sistema de arranque suave. Dedicado para: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: '2,9 / 2,5 / 1,9 m³/min',
        EN: '2.9 / 2.5 / 1.9 m³/min',
        DE: '2,9 / 2,5 / 1,9 m³/min',
        ES: '2,9 / 2,5 / 1,9 m³/min'
      },
      maxPressure: {
        PL: '7 / 10 / 14 bar',
        EN: '7 / 10 / 14 bar',
        DE: '7 / 10 / 14 bar',
        ES: '7 / 10 / 14 bar'
      },
      weight: '690 kg'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2023/03/5858-thickbox_default-Sprezarka-przewozna-ATMOS-Chrast-PDP-20.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2023/03/5858-thickbox_default-Sprezarka-przewozna-ATMOS-Chrast-PDP-20.jpg'
    ],
    features: {
      PL: ['Silnik Perkins 403J-11', 'Układ łagodnego rozruchu', 'Trzy zakresy ciśnienia'],
      EN: ['Perkins 403J-11 engine', 'Soft-start system', 'Three pressure ranges'],
      DE: ['Perkins 403J-11 Motor', 'Sanftanlaufsystem', 'Drei Druckbereiche'],
      ES: ['Motor Perkins 403J-11', 'Sistema de arranque suave', 'Tres rangos de presión']
    }
  },
  {
    id: 'atmos-pb82',
    name: 'Kompresor ATMOS PB82',
    subName: {
      PL: 'Sprężarka do wdmuchiwarek',
      EN: 'Compressor for blowing machines',
      DE: 'Kompressor für Einblasmaschinen',
      ES: 'Compresor para máquinas de soplado'
    },
    group: 'Kompresory',
    category: 'ATMOS',
    description: {
      PL: 'Kompresor Atmos PB82 – niezbędny do prawidłowej pracy wdmuchiwarek, umożliwiający osiągnięcie maksymalnego zasięgu wdmuchiwania. Na życzenie dostępna chłodnica końcowa sprężonego powietrza i osuszacz. Dedykowany dla: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      EN: 'The Atmos PB82 compressor – essential for the proper operation of blowing machines, enabling maximum blowing range. Aftercooler and dryer available on request. Dedicated for: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      DE: 'Der Atmos PB82 Kompressor – unverzichtbar für den ordnungsgemäßen Betrieb von Einblasmaschinen und maximale Einblasreichweite. Nachkühler und Trockner auf Anfrage erhältlich. Geeignet für: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      ES: 'El compresor Atmos PB82 – imprescindible para el correcto funcionamiento de las máquinas de soplado y el máximo alcance. Postenfriador y secador disponibles bajo pedido. Dedicado para: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: '1 m³/min',
        EN: '1 m³/min',
        DE: '1 m³/min',
        ES: '1 m³/min'
      },
      maxPressure: {
        PL: '14 bar',
        EN: '14 bar',
        DE: '14 bar',
        ES: '14 bar'
      },
      weight: 'N/A'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2023/02/Kompresor111.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2023/02/Kompresor111.png'
    ],
    features: {
      PL: ['Maksymalny zasięg wdmuchiwania', 'Chłodnica i osuszacz na życzenie', 'Ciśnienie 14 bar'],
      EN: ['Maximum blowing range', 'Aftercooler & dryer on request', '14 bar pressure'],
      DE: ['Maximale Einblasreichweite', 'Nachkühler & Trockner auf Anfrage', '14 bar Druck'],
      ES: ['Máximo alcance de soplado', 'Postenfriador y secador bajo pedido', 'Presión 14 bar']
    }
  },
  {
    id: 'kaeser-m17a',
    name: 'Kompresor KAESER M17A',
    subName: {
      PL: 'Sprężarka z separatorem cyklonowym',
      EN: 'Compressor with cyclone separator',
      DE: 'Kompressor mit Zyklon-Abscheider',
      ES: 'Compresor con separador ciclónico'
    },
    group: 'Kompresory',
    category: 'KAESER',
    description: {
      PL: 'KAESER M17A – kompresor niezbędny do prawidłowej pracy wdmuchiwarek, umożliwiający osiągnięcie maksymalnego zasięgu wdmuchiwania. W komplecie chłodnica końcowa sprężonego powietrza i separator cyklonowy. Dedykowany dla: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      EN: 'KAESER M17A – compressor essential for the proper operation of blowing machines, enabling maximum blowing range. Includes aftercooler and cyclone separator. Dedicated for: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      DE: 'KAESER M17A – Kompressor, der für den ordnungsgemäßen Betrieb von Einblasmaschinen unverzichtbar ist. Nachkühler und Zyklon-Abscheider im Lieferumfang enthalten. Geeignet für: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.',
      ES: 'KAESER M17A – compresor imprescindible para el correcto funcionamiento de las máquinas de soplado. Incluye postenfriador y separador ciclónico. Dedicado para: BDJ BUDGET, BDJ MINI, BDJ STANDARD, BDJ EXTENDED.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: '1 m³/min',
        EN: '1 m³/min',
        DE: '1 m³/min',
        ES: '1 m³/min'
      },
      maxPressure: {
        PL: '15 bar',
        EN: '15 bar',
        DE: '15 bar',
        ES: '15 bar'
      },
      weight: 'N/A'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2023/02/Projekt-bez-nazwy-1.png',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2023/02/Projekt-bez-nazwy-1.png',
      'https://bluedragonjet.com/wp-content/uploads/2023/02/kaeser-m13-miete-dia-11_big.jpg'
    ],
    features: {
      PL: ['Separator cyklonowy w komplecie', 'Chłodnica końcowa', 'Ciśnienie 15 bar'],
      EN: ['Cyclone separator included', 'Aftercooler included', '15 bar pressure'],
      DE: ['Zyklon-Abscheider enthalten', 'Nachkühler enthalten', '15 bar Druck'],
      ES: ['Separador ciclónico incluido', 'Postenfriador incluido', 'Presión 15 bar']
    }
  },
  {
    id: 'kaeser-m82a',
    name: 'Kompresor KAESER M82A',
    subName: {
      PL: 'Sprężarka do ciężkich wdmuchiwarek',
      EN: 'Compressor for heavy blowing machines',
      DE: 'Kompressor für schwere Einblasmaschinen',
      ES: 'Compresor para máquinas de soplado pesadas'
    },
    group: 'Kompresory',
    category: 'KAESER',
    description: {
      PL: 'Sprężarka KAESER M82A – kompresor do najcięższych wdmuchiwarek. Niezbędny do prawidłowej pracy, umożliwiający osiągnięcie maksymalnego zasięgu wdmuchiwania. W komplecie chłodnica końcowa sprężonego powietrza i separator cyklonowy. Dedykowany dla: BDJ MAX, BDJ HYDRO, BDJ HYDRO CHAIN, BDJ MULTI TUBE.',
      EN: 'KAESER M82A compressor – for the heaviest blowing machines. Essential for proper operation and maximum blowing range. Includes aftercooler and cyclone separator. Dedicated for: BDJ MAX, BDJ HYDRO, BDJ HYDRO CHAIN, BDJ MULTI TUBE.',
      DE: 'KAESER M82A Kompressor – für die schwersten Einblasmaschinen. Unverzichtbar für ordnungsgemäßen Betrieb und maximale Einblasreichweite. Nachkühler und Zyklon-Abscheider im Lieferumfang. Geeignet für: BDJ MAX, BDJ HYDRO, BDJ HYDRO CHAIN, BDJ MULTI TUBE.',
      ES: 'Compresor KAESER M82A – para las máquinas de soplado más pesadas. Imprescindible para el funcionamiento correcto y el máximo alcance. Incluye postenfriador y separador ciclónico. Dedicado para: BDJ MAX, BDJ HYDRO, BDJ HYDRO CHAIN, BDJ MULTI TUBE.'
    },
    specs: {
      cableRange: 'N/A',
      ductRange: 'N/A',
      blowingDistance: {
        PL: '8,4 m³/min',
        EN: '8.4 m³/min',
        DE: '8,4 m³/min',
        ES: '8,4 m³/min'
      },
      maxPressure: {
        PL: '7 bar',
        EN: '7 bar',
        DE: '7 bar',
        ES: '7 bar'
      },
      weight: 'N/A'
    },
    image: 'https://bluedragonjet.com/wp-content/uploads/2023/02/C-M82_46-76153.jpg',
    gallery: [
      'https://bluedragonjet.com/wp-content/uploads/2023/02/C-M82_46-76153.jpg'
    ],
    features: {
      PL: ['Wydajność 8,4 m³/min', 'Separator cyklonowy w komplecie', 'Do największych wdmuchiwarek'],
      EN: ['Flow 8.4 m³/min', 'Cyclone separator included', 'For the largest blowing machines'],
      DE: ['Förderleistung 8,4 m³/min', 'Zyklon-Abscheider enthalten', 'Für größte Einblasmaschinen'],
      ES: ['Caudal 8,4 m³/min', 'Separador ciclónico incluido', 'Para las mayores máquinas de soplado']
    }
  }
];
