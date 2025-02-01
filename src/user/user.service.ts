import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'
import { UserAuthDTO, UserCreateDTO, UserUpdateDTO } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService){}

	authUser(dto: UserAuthDTO) {
		const {login, password} = dto
		return this.prisma.user.findFirst({
			where: {
				login,
				password
			}
		})
  }

  createUser(dto: UserCreateDTO) {
		return this.prisma.user.create({data: dto})
  }

	authUserLogin(name: string) {
		return this.prisma.user.findUnique({
			where: {
				login: name
			}
		})
	}

	getUsers() {
		return this.prisma.user.findMany()
	}

	updAdmin(dto: UserUpdateDTO, login: string) {
		let userRole;
		if (dto.check) {
			userRole = "admin"
		} else {
			userRole = "user"
		}
		return this.prisma.user.update({
			where: {
				login
			},
			data: {
				role: userRole
			}
		})
	}
}
