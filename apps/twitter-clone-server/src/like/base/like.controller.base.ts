/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LikeService } from "../like.service";
import { LikeCreateInput } from "./LikeCreateInput";
import { Like } from "./Like";
import { LikeFindManyArgs } from "./LikeFindManyArgs";
import { LikeWhereUniqueInput } from "./LikeWhereUniqueInput";
import { LikeUpdateInput } from "./LikeUpdateInput";

export class LikeControllerBase {
  constructor(protected readonly service: LikeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Like })
  async createLike(@common.Body() data: LikeCreateInput): Promise<Like> {
    return await this.service.createLike({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Like] })
  @ApiNestedQuery(LikeFindManyArgs)
  async likes(@common.Req() request: Request): Promise<Like[]> {
    const args = plainToClass(LikeFindManyArgs, request.query);
    return this.service.likes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Like })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async like(
    @common.Param() params: LikeWhereUniqueInput
  ): Promise<Like | null> {
    const result = await this.service.like({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Like })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLike(
    @common.Param() params: LikeWhereUniqueInput,
    @common.Body() data: LikeUpdateInput
  ): Promise<Like | null> {
    try {
      return await this.service.updateLike({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Like })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLike(
    @common.Param() params: LikeWhereUniqueInput
  ): Promise<Like | null> {
    try {
      return await this.service.deleteLike({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
