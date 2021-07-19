import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '2c140626c407ecb20038434c5538c5';
        const client = new SiteClient(TOKEN);

        // Validar os dados antes de cadastrar
        const registroCriado = await client.items.create({
            itemType: '977008', // ID do Model de "Comunidades" criado pelo Dato
            ...request.body,
            //title: 'Comunidade de Teste',
            //imageUrl: 'https://github.com/Rui-code.png',
            //creatorSlug: 'Rui-code',
        });

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        });
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!',
    });
}