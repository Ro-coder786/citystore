/** @type {import('next').NextConfig} */
const nextConfig = {    
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.dummyjson.com',
                port:'',
                pathname:'/products/**',
                search:''
            },{
                protocol:'https',
                hostname:'www.freeiconspng.com',
                port:'',
                pathname:'/thumbs/**',
                search:''
            }           
        ]
    }
};

export default nextConfig;
