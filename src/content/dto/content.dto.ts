import { IsString, IsUrl } from 'class-validator'

export class ContentCreateDTO {

	@IsString({
		message: "Введите имя корректно"
	})
	name: string

	@IsString({
		message: "Введите определение корректно"
	})
	definition: string

	@IsString(
		{
		message: "Введите превилегию корректно"
		}	
	)
	premium1: string

	@IsString({
		message: "Введите превилегию корректно"
	})
	premium2: string

	@IsString({
		message: "Введите превилегию корректно"
	})
	premium3: string

	@IsString({
		message: "Введите превилегию корректно"
	})
	premium4: string

	@IsString({
		message: "Введите превилегию корректно"
	})
	premium5: string

	@IsUrl()
	img: string
}

export type TContentUpdateDTO = Partial<ContentCreateDTO>