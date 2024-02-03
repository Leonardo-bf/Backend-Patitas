import {Prisma, PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

import { request, Request, Response} from 'express';

class ProdutoController{
    async create(req: Request, res: Response) {
        try{
            const {tipo} = req.body;
            let produtoInput: Prisma.ProdutoCreateInput = {
                tipo: tipo,
                cliente: {
                    create: undefined,
                    connectOrCreate: undefined,
                    connect: undefined
                }
            }
            const produto = await prisma.produto.create({data: produtoInput})
            return res.status(200).json({message: "Cliente cadastrado com sucesso.", cliente: produto});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async read(req: Request, res: Response) {
        try{
            const produtos = await prisma.produto.findMany();

            return res.status(200).json({cliente: produtos});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async readonly(req: Request, res: Response) {
        const {id} = req.params;
        try{
            const produto = await prisma.produto.findUnique({
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: produto});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async update(req: Request, res: Response) {
        const {tipo} = req.body;
        const {id} = req.params;
        try{
            const produto = await prisma.produto.update({
                data: {tipo: tipo},
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: produto});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async destroy(req: Request, res: Response) {
        const {id} = req.params;
        try{
            const produto = await prisma.produto.delete({
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: produto});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }

    async adicionarCliente(req: Request, res: Response) {
        const {clienteId} = req.body;
        const {id} = req.params;
        try{
            const cliente = await prisma.cliente.update({
                data: {produtos: {connect:{id:Number(id)}}},
                where: {id: Number(clienteId)}
            });

            return res.status(200).json({cliente: cliente});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }

    async removerCliente(req: Request, res: Response) {
        const {clienteId} = req.body;
        const {id} = req.params;
        try{
            const cliente = await prisma.cliente.update({
                data: {produtos: {disconnect:{id:Number(id)}}},
                where: {id: Number(clienteId)}
            });

            return res.status(200).json({cliente: cliente});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }

}






export default new ProdutoController()