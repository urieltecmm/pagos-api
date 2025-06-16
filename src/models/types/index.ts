import { Sequelize, Model } from "sequelize";
//import { Actividad, ActividadesSchema } from "./Actividades";

export function setupModels(sequelize: Sequelize): void {
    //Actividad.init(ActividadesSchema, Actividad.config(sequelize));


    Object.values(sequelize.models).forEach((model: typeof Model) => {
        if ("associate" in model) {
            (model as typeof Model & { associate: (models: typeof sequelize.models) => void }).associate(sequelize.models);
        }
    });
}
