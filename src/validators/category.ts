import Joi from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class CategoryValidator {
    createSchema = Joi.object({
        name: Joi.object({
            en: Joi.string().required(),
            uz: Joi.string().required()
        })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.createSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.createSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
