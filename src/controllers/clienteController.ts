import {Prisma, PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

import { request, Request, Response} from 'express';

class ClienteController{
    async create(req: Request, res: Response) {
        try{
            const {nome, cpf, email, rua, numero} = req.body;
            console.log(typeof numero)
            let clienteInput: Prisma.ClienteCreateInput = {
                nome: nome,
                cpf: cpf,
                email: email,
                rua: rua,
                numero: Number(numero)

            }
            const cliente = await prisma.cliente.create({data: clienteInput})
            return res.status(200).json({message: "Cliente cadastrado com sucesso.", cliente: cliente});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async read(req: Request, res: Response) {
        try{
            const clientes = await prisma.cliente.findMany();

            return res.status(200).json({cliente: clientes});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async readonly(req: Request, res: Response) {
        const {id} = req.params;
        try{
            const cliente = await prisma.cliente.findUnique({
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: cliente});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async update(req: Request, res: Response) {
        const {nome, cpf, email, rua, numero} = req.body;
        const {id} = req.params;
        try{
            const cliente = await prisma.cliente.update({
                data: {nome: nome,
                    cpf: cpf,
                    email: email,
                    rua: rua,
                    numero: Number(numero)},
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: cliente});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async destroy(req: Request, res: Response) {
        const {id} = req.params;
        try{
            const cliente = await prisma.cliente.delete({
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: cliente});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }

    async adicionarFidelidade(req: Request, res: Response) {
        const {fidelidadeId} = req.body;
        const {id} = req.params;
        try{
            const fidelidade = await prisma.clienteFidelidade.update({
                data: {clientes: {connect:{id:Number(id)}}},
                where: {id: Number(fidelidadeId)}
            });

            return res.status(200).json({fidelidade: fidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }

    async removerFidelidade(req: Request, res: Response) {
        const {fidelidadeId} = req.body;
        const {id} = req.params;
        try{
            const fidelidade = await prisma.clienteFidelidade.update({
                data: {clientes: {disconnect:{id:Number(id)}}},
                where: {id: Number(fidelidadeId)}
            });

            return res.status(200).json({fidelidade: fidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }


}






export default new ClienteController()