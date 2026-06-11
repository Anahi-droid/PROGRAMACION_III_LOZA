import { Document } from 'mongoose';
export declare class Contenido extends Document {
    titulo?: string;
    duracion?: number;
    descripcion?: string;
    tipo?: string;
    enlace?: string;
    dificultad?: string;
    fecha_publicacion?: Date;
    completado?: boolean;
    tiempo_estimado?: string;
    video_id?: string;
}
export declare const ContenidoSchema: import("mongoose").Schema<Contenido, import("mongoose").Model<Contenido, any, any, any, any, any, Contenido>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Contenido, Document<unknown, {}, Contenido, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    titulo?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duracion?: import("mongoose").SchemaDefinitionProperty<number | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descripcion?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    enlace?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dificultad?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fecha_publicacion?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completado?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tiempo_estimado?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    video_id?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contenido, Document<unknown, {}, Contenido, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contenido & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Contenido>;
