import { UserModel } from './../user/user.model';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
	) {}

	async register(dto: AuthDto) {
		const oldUser = this.UserModel.findOne({ email: dto.email });
    if(oldUser) throw new BadRequestException('User with this email already registered')
		const newUser = new this.UserModel(dto);
		return newUser.save();
	}
}
