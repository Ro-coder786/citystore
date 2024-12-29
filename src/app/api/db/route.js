import { client } from '../../../utils/lib'
import { NextResponse } from 'next/server'
  export async function GET() {        
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        return NextResponse.json({message : "Pinged your deployment. You successfully connected to MongoDB!"});
        } catch (e) {       
        return NextResponse.json({ message: e });
    }
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      } 
}



