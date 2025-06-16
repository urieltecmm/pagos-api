import { Model, ModelStatic, WhereOptions, IncludeOptions, GroupOption } from "sequelize";

export const findAllQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (
    where?: WhereOptions<T["_attributes"]>,
    include?: IncludeOptions[],
    group?: GroupOption
  ): Promise<T[]> => {
    return await model.findAll({
      where,
      include,
      group,
    });
  };
