import {Prisma, PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

import { request, Request, Response} from 'express';

class FidelidadeController{
    async create(req: Request, res: Response) {
        try{
            const {frete, cupom, premios, cartao} = req.body;
            let fidelidadeInput: Prisma.ClienteFidelidadeCreateInput = {
                frete: frete === 'true',
                cupom: cupom === 'true',
                premios: premios === 'true',
                cartao: cartao

            }
            const clienteFidelidade = await prisma.clienteFidelidade.create({data: fidelidadeInput})
            return res.status(200).json({message: "Cliente cadastrado com sucesso.", cliente: clienteFidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async read(req: Request, res: Response) {
        try{
            const clientesFidelidade = await prisma.clienteFidelidade.findMany();

            return res.status(200).json({cliente: clientesFidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async readonly(req: Request, res: Response) {
        const {id} = req.params;
        try{
            const clienteFidelidade = await prisma.clienteFidelidade.findUnique({
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: clienteFidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async update(req: Request, res: Response) {
        const {frete, cupom, premios, cartao} = req.body;
        const {id} = req.params;
        try{
            const clienteFidelidade = await prisma.clienteFidelidade.update({
                data: {
                    frete: frete,
                    cupom: cupom,
                    premios: premios,
                    cartao: cartao},
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: clienteFidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }
    async destroy(req: Request, res: Response) {
        const {id} = req.params;
        try{
            const clienteFidelidade = await prisma.clienteFidelidade.delete({
                where: {id: Number(id)}
            });

            return res.status(200).json({cliente: clienteFidelidade});
    
        }
        catch(error: any){
            res.status(500).json({error: error})
        }
    }

}






export default new FidelidadeController()