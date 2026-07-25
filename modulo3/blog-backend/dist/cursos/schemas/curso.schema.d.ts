import { Document, Types } from 'mongoose';
export declare class Curso extends Document {
    nombre?: string;
    descripcion?: string;
    categoria?: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    nivel?: string;
    requisitos?: string[];
    precio?: number;
    instructor?: {
        nombre: string;
        email: string;
    };
    calificacion_promedio?: number;
    estado?: string;
    contenidos?: Types.ObjectId[];
}
export declare const CursoSchema: import("mongoose").Schema<Curso, import("mongoose").Model<Curso, any, any, any, any, any, Curso>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Curso, Document<unknown, {}, Curso, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descripcion?: import("mongoose").SchemaDefinitionProperty<string | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nombre?: import("mongoose").SchemaDefinitionProperty<string | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    categoria?: import("mongoose").SchemaDefinitionProperty<string | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fecha_inicio?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fecha_fin?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nivel?: import("mongoose").SchemaDefinitionProperty<string | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    requisitos?: import("mongoose").SchemaDefinitionProperty<string[] | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    precio?: import("mongoose").SchemaDefinitionProperty<number | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    instructor?: import("mongoose").SchemaDefinitionProperty<{
        nombre: string;
        email: string;
    } | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    calificacion_promedio?: import("mongoose").SchemaDefinitionProperty<number | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    estado?: import("mongoose").SchemaDefinitionProperty<string | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contenidos?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[] | undefined, Curso, Document<unknown, {}, Curso, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Curso & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Curso>;
