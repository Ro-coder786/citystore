import { NextResponse } from 'next/server'
import { client } from '../../../utils/lib'


export async function GET() {        
    try {             
        await client.connect();
        const db = client.db('citystore');
        const productCollection = db.collection('products'); // Replace with your collection name
        const productArray = await productCollection.find({}).toArray();
        return NextResponse.json(productArray);  

    } catch (e) {       
        return NextResponse.json({ message: e });
    }
    finally {
        await client.close();
    }    
}


