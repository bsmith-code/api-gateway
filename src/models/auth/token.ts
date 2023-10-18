// Common
import {
  Model,
  Table,
  Column,
  Default,
  DataType,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  ForeignKey
} from 'sequelize-typescript'

// Models
import { User } from 'models/auth/user'

@Table({ tableName: 'token' })
export class Token extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  refreshToken!: string

  @CreatedAt
  createdAt?: Date

  @UpdatedAt
  updatedAt?: Date
}
