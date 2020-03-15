export interface QrOption {
    id?: number;
    application: string;
    auteurdelaquestion: string;
    format: string;
    datedelaquestion: string;
    severite: string;
    objet: string;
    version: string;
    libelledelaquestion: string;
    datedelareponse: string;
    ecart: number;
    auteurdelareponse: string;
    libelledelareponse: string;
    statutquestion: string;
}

export class QrDTO {

    id: number;
    application: string;
    auteurdelaquestion: string;
    format: string;
    datedelaquestion: string;
    severite: string;
    objet: string;
    version: string;
    libelledelaquestion: string;
    datedelareponse: string;
    ecart: number;
    auteurdelareponse: string;
    libelledelareponse: string;
    statutquestion: string;


    constructor(options: QrOption) {
        this.id = options.id || 0;
        this.application = options.application;
        this.auteurdelaquestion = options.auteurdelaquestion;
        this.format = options.format;
        this.datedelaquestion = options.datedelaquestion;
        this.severite = options.severite;
        this.objet = options.objet;
        this.version = options.version;
        this.libelledelaquestion = options.libelledelaquestion;
        this.datedelareponse = options.datedelareponse;
        this.ecart = options.ecart;
        this.auteurdelareponse = options.auteurdelareponse;
        this.libelledelareponse = options.libelledelareponse;
        this.statutquestion = options.statutquestion;
    }
}