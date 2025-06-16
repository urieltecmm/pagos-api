import { Model, ModelStatic, Includeable, Transaction } from "sequelize";

export const createQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (
    data: T["_attributes"],
    options?: { include?: Includeable; transaction?: Transaction }
  ): Promise<T> => {
    const newEntry = await model.create(data, {
      include: options?.include,
      transaction: options?.transaction,
    });
    return newEntry;
  };
