// funcion constructora de consultorio
function Consultorio(nombre, paciente) {
  let _nombre = nombre;
  let _paciente = paciente || [];

  // definir getter y setter de variable _nombre
  Object.defineProperty(this, '_nombre', {
    get: function () {
      return _nombre;
    },
    set: function (nom) {
      _nombre = nom;
    },
  });
  // definir getter y setter de variable _paciente
  Object.defineProperty(this, '_paciente', {
    get: function () {
      return _paciente;
    },
    set: function () {
      return alert('no puede agregar pacientes de esta manera');
    },
  });
}

// agregar metodo para buscar un paciente por nombre
Consultorio.prototype.buscarPorNombre = function (nombre) {
  let pacienteEncontrado = this._paciente.filter(function (paciente) {
    if (paciente._nombre === nombre) {
      return paciente;
    } else {
      return alert('El paciente no existe!');
    }
  });
  console.log(pacienteEncontrado);
};

// agregar metodo para buscar total de pacientes
Consultorio.prototype.mostrarTotalPacientes = function () {
  let totalPacientes = this._paciente.map(function (paciente) {
    return paciente;
  });
  console.log(totalPacientes);
};

// Funcion constructora de paciente
function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;

  // definir getter & setter de variable _nombre
  Object.defineProperty(this, '_nombre', {
    get: function () {
      return _nombre;
    },
    set: function (nom) {
      _nombre = nom;
    },
  });
  // definir getter & setter de variable _edad
  Object.defineProperty(this, '_edad', {
    get: function () {
      return _edad;
    },
    set: function (e) {
      _edad = e;
    },
  });
  // definir getter & setter de variable _rut
  Object.defineProperty(this, '_rut', {
    get: function () {
      return _rut;
    },
    set: function (valor) {
      _rut = valor;
    },
  });
  // definir getter & setter de variable _dignostico
  Object.defineProperty(this, '_diagnostico', {
    get: function () {
      return _diagnostico;
    },
    set: function (valor) {
      _diagnostico = valor;
    },
  });
}

// crear instancias de pacientes
let p1 = new Paciente('Pedro Salas', 38, '19.999.999-9', 'Refrio leve');
let p2 = new Paciente('Romina Soto', 21, '22.999.999-9', 'Coronavirus');
let p3 = new Paciente('Rodigo Rojas', 52, '9.523.855-9', 'Úlceras');
let p4 = new Paciente('Ben Breretton', 22, '25.999.999-9', 'Depresión');

// creando instancias de consultorios con pacientes generados previamente
let c1 = new Consultorio('Consultorio 1', [p1, p2, p3]);
let c2 = new Consultorio('Consultorio 2', [p4]);

console.log(c1);
console.log(c2);
