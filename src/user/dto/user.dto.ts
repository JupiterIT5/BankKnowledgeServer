import { IsBoolean, IsString } from 'class-validator'

export class UserAuthDTO {
	@IsString()
	login: string

	@IsString()
	password: string
}

export class UserCreateDTO {
	@IsString()
	login: string

	@IsString()
	password: string

	@IsString()
	name: string

	@IsString()
	lastname: string

	@IsString()
	surname: string
}

export class UserUpdateDTO {
	@IsBoolean()
	check: boolean
}