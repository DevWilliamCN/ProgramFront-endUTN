import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_usuarios } from "../entity/User";

export const checkRoles = (roles: Array<string>) => {
  return async (req: Request, resp: Response, next: NextFunction) => {
    const { idUsuario } = resp.locals.payload;

    const usuarioRepo = AppDataSource.getRepository(
      bienestarestudiantil_usuarios
    );

    let usuario;
    try {
      usuario = await usuarioRepo.findOneOrFail({
        where: { UsuarioId: idUsuario },
      });
    } catch (error) {
      resp.status(400).json({ mensaje: "Error en roles" });
    }

    if (!roles.includes(usuario.rol)) {
      return resp.status(401).json("Acceso no autorizado");
    }
    next();
  };
};
