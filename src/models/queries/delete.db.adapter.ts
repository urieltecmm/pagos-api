import { Model, ModelStatic, WhereOptions } from "sequelize";

export const deleteQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (where: WhereOptions<T["_attributes"]>): Promise<number> => {
    return await model.destroy({ where });
  };
