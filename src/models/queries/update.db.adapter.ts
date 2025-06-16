import { Model, ModelStatic, WhereOptions } from "sequelize";

export const updateQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (data: Partial<T["_attributes"]>, where: WhereOptions<T["_attributes"]>): Promise<[number, T[]]> => {
    return await model.update(data, { where, returning: true });
  };

