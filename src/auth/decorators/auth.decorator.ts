import { applyDecorators, UseGuards } from '@nestjs/common';
import { OnlyAdminGuard } from '../guards/admin.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { TypeRole } from './../auth.interface';

export const Auth = (role: TypeRole = 'user') =>
	applyDecorators(
		role === 'admin'
			? UseGuards(OnlyAdminGuard, JwtAuthGuard)
			: UseGuards(JwtAuthGuard)
	);
