const obj = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'Aaaaaa';
  },
};

function isObject(subjet) {
  return typeof subjet === 'object';
}

function isArray(subjet) {
  return Array.isArray(subjet);
}

function deepCopy(subjet) {
  let copySubjet;

  const subjetIsArray = isArray(subjet);
  const subjetIsObjet = isObject(subjet);

  if (subjetIsArray) {
    copySubjet = [];
  } else if (subjetIsObjet) {
    copySubjet = {};
  } else {
    return subjet;
  }
  for (key in subjet) {
    const keyIsObject = isObject(subjet[key]);
    if (keyIsObject) {
      copySubjet[key] = deepCopy(subjet[key]);
    } else {
      if (subjetIsArray) {
        copySubjet.push(subjet[key]);
      } else {
        copySubjet[key] = subjet[key];
      }
    }
  }
  return copySubjet;
}

/*
Funcion bucle compleja pero en recursividad.

let array = [1,23,41,52,42,5,656,6,98]
let numeroArray = 0;

let fun = (numerito) => {
    if( numerito < array.length ) {
    let valorArray = array[numerito];
    console.log(valorArray);
    return fun(numerito + 1)
    } else {
        console.log("fin");
    }  
}

let y = fun(numeroArray);

Deep copy.

Utilizaresmos recursividad para crear copia de los objetos y que no se rompan si tenemos objetso dentro de objetos dentro de objetos, o si tenemos metodos dentro de nuestros objetos.

Bien, deep copy en muchos aspectos es un gran algoritmo con manejo de datos, recursividad, etc etc, por lo tanto ire escribiendo fracciones de codigo y explicandolas, y cua do termine de explicar todo, pondre el algoritmo completo.

const obj1 = {
    a: "a",
    b: "b",
    c: {
       d: "d",
       e: "e", 
    },
    editA() {
        this.a = "AAAAA";
    }
}; 
///?lo de aca arriba es el objeto a copiar

function isObject(subject) {
    return typeof subject == "object"
}
function esUnArray(subject) {
    return Array.isArray(subject);
}
///?estas 2 funciones son funciones de validacion de datos, estan seran llamads y se les pasaran un parametro, la mayoria de datos se puede validar con typeof, ergo, los arrays son los unicos que tienen un metodo espacial = Array.isArray(objetoAsaberSiEsUnArray)

function deepCopy(subject) {
    let copySubject;
///?dentro de sta funcion sucedera todo,el copysubject guardara los datos, este esta esperando a saber si los datos son objetos,arrays u otras cosas como strings
    const subjectIsArray = esUnArray(subject);
    const subjectIsObject = isObject(subject);

///?con las constantes subjectIsArray,   subjectIsObject trabajere los datos,  estas son las encargadas de llamar a  las funciones que hicimos fuera de la funcion deepCopy.
  

  if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

///?por ultimo empezamos a trabajar con los datos ya validados, segun el dato que sea correspondiente, trbajaremos objeto,arrays u otros valores.

///?2da parte del algoritmo
for(key in subject) {
///?Creamos un bucle for, este bucle (a in b)se puede ejecutar en una estructura de datos como arrays, objetos. Este loop signfica que el elemento a pasara por TODA la estructura de datos de b, y claro, dependieno la posicion de a,este tendra el valor de donde este parado encima. ejemplo: 
//let array = [52,42,56];
//for(a in array) {
	//console.log(array[a]);
//}
        const keyIsObject = isObject(subject[key]);
///?con keyIsObject VUELVO a validar si los datos DENTRO de la estructura de datos YA VALIDADA son objetos o datos. 

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
///? si resulta que son objetos, entonces iremos copiando y pegando los datos en copySubject, y estos datos se iran copiando de manera identica y exitosa gracias la recursividad deepCopy(subject[key]);

} else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key]
            }
        }
    }
 ///?estos 2 ultimos casos son mas sencillos ya que simplemente se basa en arrays u elementos que no sean ni arrays ni objetos   
 
    return copySubject;
///? Y al final de todo, la funcion debe devolver algo,verdad? en este caso, quien es el que almaceno todos los datos de el objeto que copiamos? el copySubject, bien, ese es quien retornamos.
} 

 */