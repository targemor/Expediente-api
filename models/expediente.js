var mongoose = require('mongoose');
var expedienteSchema = mongoose.Schema({
    // body...
    expectativasPadres: {
        type: String
        
    },
    expectativasNinio: {
        type: String
        
    },
    tiempoTratamiento: {
        type: Date
        
    },
    normasCasa: {
        type: String
       
    },
    ResponsabilidadesCasa: {
        type: String
        
    },
    represion: {
        type: String
        
    },
    figurasAutoridad: {
        type: String
        
    },
    separacionPadres: {
        type: String
        
    },
    edadComeSolo: {
        type: String
        
    },
    edadVisteSolo: {
        type: Boolean
        
    },
    manoCome: {
        type: String
        
    },
    visteSolo: {
        type: Boolean
       
    },
    edadVisteSolo: {
        type: Number
        
    },
    baniaSolo: {
        type: Boolean
        
    },
    edadBania: {
        type: Number
        
    },
    horaDormir: {
        type: String
        
    },
    horaLevanta: {
        type: String
        
    },
    quienAcuesta: {
        type: String
        
    },
    duermeSolo: {
        type: Boolean
        
    },
    comidaPreferida: {
        type: String
        
    },
    juegos: {
        type: String
       
    },
    lectura: {
        type: String
        
    },
    television: {
        type: String
        
    },
    musica: {
        type: String
        
    },
    deportes: {
        type: String
        
    },
    otros: {
        type: String
       
    },
    caracter: {
        type: String
        
    },
    expresionSentimientos: {
        type: String
        
    },
    expresionEnojo: {
        type: String
        
    },
    relacionAmigos: {
        type: String
        
    },
    tipoVivienda: {
        type: String
        
    },
    viasTransporte: {
        type: String
        
    },
    //Escolares
    guarderia: {
        type: String
        
    },
    preescolar: {
        type: String
        
    },
    primaria: {
        type: String
        
    },
    agradaEscuela: {
        type: String
        
    },
    cambiosColegio: {
        type: String
        
    },
    repeticionGrados: {
        type: String
        
    },
    materiasAccesibles: {
        type: String
        
    },
    tareaSolo: {
        type: String
        
    },
    tiempoTarea: {
        type: String
        
    },
    clasesExtra: {
        type: String
        
    },
    embarazoPlaneado: {
        type: Boolean
        
    },
    numGestacion: {
        type: Number
        
    },
    amenazaAborto: {
        type: String
        
    },
    cursoEmbarazo: {
        type: String
        
    },
    controlMedico: {
        type: String
        
    },
    ingestaDrogas: {
        type: String
        
    },
    enfermedadesFamiliares: {
        type: String
        
    },
    tipoParto: {
        type: String
        
    },
    prematuro: {
        type: Boolean
        
    },
    complicacionesParto: {
        type: String
        
    },
    lloroNacer: {
        type: String
        
    },
    antecedenesDesarrolloCol: {
        type: String
        
    },
    peso: {
        type: Number
        
    },
    talla: {
        type: Number
        
    },
    apgar: {
        type: Number
        
    },
    incubador: {
        type: String
        
    },
    esfinterDiurno: {
        type: String
        
    },
    esfinterNocturno: {
        type: String
        
    },
    gateo: {
        type: String
        
    },
    caminar: {
        type: String
        
    },
    saltar: {
        type: String
        
    },
    correr: {
        type: String
        
    },
    balbuceo: {
        type: String
        
    },
    hablar: {
        type: String
        
    },
    dificultadPalabras: {
        type: String
        
    },
    comprendeInstrucciones: {
        type: String
        
    },
    //Consulta
    remitente: {
        type: String
        
    },
    motivoConsulta: {
        type: String
        
    },
    descripcionProblema: {
        type: String
        
    },
    conducta: {
        type: String
        
    },
    evolucionProblema: {
        type: String
        
    },
    especialistas: {
        type: String
        
    },
    estudios: {
        type: String
        
    },
    diagnosticos: {
        type: String
        
    },
    tratamiento: {
        type: String
        
    },
    duracionTratamiento: {
        type: String
       
    },
    resultadosTratamiento: {
        type: String
        
    },
});
var Expediente = module.exports = mongoose.model('Expediente-Medico', expedienteSchema);
//get Expedientes 
module.exports.getExpediente = function(callback,limit) {
    // body...
    Expediente.find(callback).limit(limit);
}

module.exports.getExpedienteId=function (id,callback) {
	// body...
	Expediente.findById(id,callback);
}

module.exports.addExpediente=function (expediente,callback) {
	// body...
	Expediente.create(expediente,callback);
}
