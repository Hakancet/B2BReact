import { get } from "lodash";
import axios from "axios";
import { config } from "process";


const api = axios.create({
    baseURL: `http://crm.networkkurumsal.com:3001/api/dev/`,
  });

  const token = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}`,
  });

  api.interceptors.request.use(
    (config) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWVobWV0LnV5c2FsIiwiZW1haWwiOiJ1eXNhbC5tZWgwQGdtYWlsLmNvbSIsInByb2ZpbGVQaWN0dXJlIjoidXBsb2Fkcy9lZTMyYjI1NC0zZmJlLTRhMGQtYjQ4NC0zNWI1MTUxM2M1YmUuRWtyYW5fUmVzbWlfMjAyNC0wNC0xNV8xNi4wMy4zNi5wbmciLCJOYW1lU3VybmFtZSI6Ik1laG1ldCBVeXNhbCIsIlN0b2sgS2FydMSxRWtsZSI6InRydWUiLCJTdG9rIEthcnTEsUfDvG5jZWxsZSI6InRydWUiLCJTdG9rIEthcnTEsVNpbCI6InRydWUiLCJTdG9rIEthcnTEsUxpc3RlbGUiOiJ0cnVlIiwiU3RvayBLYXJ0xLFEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiR3J1cCBUYW7EsW1sYXLEsURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJHcnVwIFRhbsSxbWxhcsSxTGlzdGVsZSI6InRydWUiLCJTYXTEscWfIMSwcnNhbGl5ZXNpRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIlRhbsSxbURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJUYW7EsW1MaXN0ZWxlIjoidHJ1ZSIsIlRla2xpZkRldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJUZWtsaWZTaWwiOiJ0cnVlIiwiU2F0xLHFnyBTaXBhcmnFn2lMaXN0ZWxlIjoidHJ1ZSIsIlByb2plRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIlRla2xpZkxpc3RlbGUiOiJ0cnVlIiwiVGVrbGlmR8O8bmNlbGxlIjoidHJ1ZSIsIlRla2xpZkVrbGUiOiJ0cnVlIiwiS3VsbGFuxLFjxLFFa2xlIjoidHJ1ZSIsIlNhdMSxxZ8gU2lwYXJpxZ9pRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIlNhdMSxxZ8gU2lwYXJpxZ9pU2lsIjoidHJ1ZSIsIlNhdMSxxZ8gU2lwYXJpxZ9pR8O8bmNlbGxlIjoidHJ1ZSIsIlNhdMSxxZ8gU2lwYXJpxZ9pRWtsZSI6InRydWUiLCJQcm9qZUxpc3RlbGUiOiJ0cnVlIiwiUHJvamVTaWwiOiJ0cnVlIiwiUHJvamVHw7xuY2VsbGUiOiJ0cnVlIiwiUHJvamVFa2xlIjoidHJ1ZSIsIkt1bGxhbsSxY8SxRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIkt1bGxhbsSxY8SxTGlzdGVsZSI6InRydWUiLCJLdWxsYW7EsWPEsVNpbCI6InRydWUiLCJLdWxsYW7EsWPEsUfDvG5jZWxsZSI6InRydWUiLCJTYXTEscWfIMSwcnNhbGl5ZXNpTGlzdGVsZSI6InRydWUiLCJTYXTEscWfIMSwcnNhbGl5ZXNpU2lsIjoidHJ1ZSIsIlNhdMSxxZ8gxLByc2FsaXllc2lHw7xuY2VsbGUiOiJ0cnVlIiwiU2F0xLHFnyDEsHJzYWxpeWVzaUVrbGUiOiJ0cnVlIiwiR3J1cCBUYW7EsW1sYXLEsVNpbCI6InRydWUiLCJHcnVwIFRhbsSxbWxhcsSxR8O8bmNlbGxlIjoidHJ1ZSIsIkdydXAgVGFuxLFtbGFyxLFFa2xlIjoidHJ1ZSIsIlNhdMSxxZ8gRmF0dXJhc8SxRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIlNhdMSxxZ8gRmF0dXJhc8SxTGlzdGVsZSI6InRydWUiLCJTYXTEscWfIEZhdHVyYXPEsVNpbCI6InRydWUiLCJTYXTEscWfIEZhdHVyYXPEsUfDvG5jZWxsZSI6InRydWUiLCJTYXTEscWfIEZhdHVyYXPEsUVrbGUiOiJ0cnVlIiwiVGFuxLFtU2lsIjoidHJ1ZSIsIlRhbsSxbUfDvG5jZWxsZSI6InRydWUiLCJUYW7EsW1Fa2xlIjoidHJ1ZSIsIkFrdGl2aXRlRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIkFrdGl2aXRlTGlzdGVsZSI6InRydWUiLCJBa3Rpdml0ZVNpbCI6InRydWUiLCJBa3Rpdml0ZUfDvG5jZWxsZSI6InRydWUiLCJNw7zFn3RlcmlEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiTcO8xZ90ZXJpTGlzdGVsZSI6InRydWUiLCJNw7zFn3RlcmlTaWwiOiJ0cnVlIiwiTcO8xZ90ZXJpR8O8bmNlbGxlIjoidHJ1ZSIsIk3DvMWfdGVyaUVrbGUiOiJ0cnVlIiwiQWt0aXZpdGVFa2xlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIFNpcGFyacWfaUxpc3RlbGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgU2lwYXJpxZ9pRWtsZSI6InRydWUiLCJTYXTEsW4gQWxtYSBTaXBhcmnFn2lEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgU2lwYXJpxZ9pR8O8bmNlbGxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIEZhdHVyYXPEsUxpc3RlbGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgxLByc2FsaXllc2lMaXN0ZWxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIMSwcnNhbGl5ZXNpRWtsZSI6InRydWUiLCJUZWRhcmlrw6dpTGlzdGVsZSI6InRydWUiLCJTYXTEsW4gQWxtYSDEsHJzYWxpeWVzaURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJETU9MaXN0ZWxlIjoidHJ1ZSIsIkRNT0RldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJETU9TaWwiOiJ0cnVlIiwiRE1PR8O8bmNlbGxlIjoidHJ1ZSIsIkRNT0VrbGUiOiJ0cnVlIiwiVGVkYXJpa8OnaURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJUZWRhcmlrw6dpU2lsIjoidHJ1ZSIsIlRlZGFyaWvDp2lHw7xuY2VsbGUiOiJ0cnVlIiwiVGVkYXJpa8OnaUVrbGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgRmF0dXJhc8SxRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIEZhdHVyYXPEsVNpbCI6InRydWUiLCJTYXTEsW4gQWxtYSBGYXR1cmFzxLFHw7xuY2VsbGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgRmF0dXJhc8SxRWtsZSI6InRydWUiLCJTYXTEsW4gQWxtYSDEsHJzYWxpeWVzaUfDvG5jZWxsZSI6InRydWUiLCJuYmYiOjE3MTUyNDMyNTMsImV4cCI6MTcxNjUzOTI1MywiaXNzIjoiY3JtLm5ldHdvcmtrdXJ1bXNhbC5jb20iLCJhdWQiOiJjcm0ubmV0d29ya2t1cnVtc2FsLmNvbSJ9.-ZptFC4k-ch6RnBTOWOzKF22559wnIPdOtbb-dfwVPU";
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
   /*  (error) => {
      if (error.response.status === 401) {
        console.warn("401 hatası");
        token
          .post(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/User/UpdateToken?token=${localStorage.getItem("token")}`)
          .then((response) => {
            console.warn("token güncellendi");
            localStorage.setItem("token", response.data.data.token);
            window.alert("Yetkileriniz Güncellendi. Lütfen sayfayı yenileyiniz.");
            window.location.reload();
          })
          .catch((error) => {
            window.alert("Oturumunuz sona erdi. Lütfen tekrar giriş yapınız.");
            localStorage.removeItem("token");
            window.location.href = "/auth-login";
          });
      }
  
      if (error.response.status === 403) {
        //window.alert("Bu işlemi yapmaya yetkiniz yok.");
        console.warn("403 hatası");
      }
  
      if (error.response.status === 404) {
        //window.alert("Aradığınız kayıt bulunamadı.");
        console.warn("404 hatası");
      }
  
      return Promise.reject(error);
    }*/
    
  );

  export const getProduct= (token) =>{
    return api.get(`StockCard/ListByCustomer?customerId=6596`);
  }

  export const getGroupName= (token) =>{
    return api.get(`Group/ListAllGroup?id=2`);
  }

/* const getData=async()=>{
   
        const response = await fetch('http://crm.networkkurumsal.com:3001/api/dev/StockCard/ListByCustomer?customerId=6596', {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWhtZXQub25lciIsImVtYWlsIjoiYWhtZXQub25lckBuZXR3b3Jra3VydW1zYWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiIvdXBsb2Fkcy9haG1ldC5vbmVyLmpwZyIsIkdydXAgVGFuxLFtbGFyxLFFa2xlIjoidHJ1ZSIsIkFrdGl2aXRlRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIkFrdGl2aXRlTGlzdGVsZSI6InRydWUiLCJBa3Rpdml0ZVNpbCI6InRydWUiLCJBa3Rpdml0ZUfDvG5jZWxsZSI6InRydWUiLCJBa3Rpdml0ZUVrbGUiOiJ0cnVlIiwiU2F0xLHFnyDEsHJzYWxpeWVzaURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJTYXTEscWfIMSwcnNhbGl5ZXNpTGlzdGVsZSI6InRydWUiLCJTYXTEscWfIMSwcnNhbGl5ZXNpU2lsIjoidHJ1ZSIsIlNhdMSxxZ8gxLByc2FsaXllc2lHw7xuY2VsbGUiOiJ0cnVlIiwiU2F0xLHFnyDEsHJzYWxpeWVzaUVrbGUiOiJ0cnVlIiwiUHJvamVEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiUHJvamVMaXN0ZWxlIjoidHJ1ZSIsIlByb2plU2lsIjoidHJ1ZSIsIlByb2plR8O8bmNlbGxlIjoidHJ1ZSIsIlByb2plRWtsZSI6InRydWUiLCJUYW7EsW1EZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiVGFuxLFtTGlzdGVsZSI6InRydWUiLCJUYW7EsW1TaWwiOiJ0cnVlIiwiVGFuxLFtR8O8bmNlbGxlIjoidHJ1ZSIsIlRhbsSxbUVrbGUiOiJ0cnVlIiwiTcO8xZ90ZXJpRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIk3DvMWfdGVyaUxpc3RlbGUiOiJ0cnVlIiwiTcO8xZ90ZXJpU2lsIjoidHJ1ZSIsIk3DvMWfdGVyaUfDvG5jZWxsZSI6InRydWUiLCJNw7zFn3RlcmlFa2xlIjoidHJ1ZSIsIlN0b2sgS2FydMSxRGV0YXkgR8O2csO8bnTDvGxlIjoidHJ1ZSIsIlN0b2sgS2FydMSxTGlzdGVsZSI6InRydWUiLCJTdG9rIEthcnTEsVNpbCI6InRydWUiLCJTdG9rIEthcnTEsUfDvG5jZWxsZSI6InRydWUiLCJTdG9rIEthcnTEsUVrbGUiOiJ0cnVlIiwiU2F0xLHFnyBGYXR1cmFzxLFEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiU2F0xLHFnyBGYXR1cmFzxLFMaXN0ZWxlIjoidHJ1ZSIsIlNhdMSxxZ8gRmF0dXJhc8SxU2lsIjoidHJ1ZSIsIlNhdMSxxZ8gRmF0dXJhc8SxR8O8bmNlbGxlIjoidHJ1ZSIsIlNhdMSxxZ8gRmF0dXJhc8SxRWtsZSI6InRydWUiLCJTYXTEscWfIFNpcGFyacWfaURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJTYXTEscWfIFNpcGFyacWfaUxpc3RlbGUiOiJ0cnVlIiwiU2F0xLHFnyBTaXBhcmnFn2lTaWwiOiJ0cnVlIiwiU2F0xLHFnyBTaXBhcmnFn2lHw7xuY2VsbGUiOiJ0cnVlIiwiU2F0xLHFnyBTaXBhcmnFn2lFa2xlIjoidHJ1ZSIsIlRla2xpZkRldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJUZWtsaWZMaXN0ZWxlIjoidHJ1ZSIsIlRla2xpZlNpbCI6InRydWUiLCJUZWtsaWZHw7xuY2VsbGUiOiJ0cnVlIiwiVGVrbGlmRWtsZSI6InRydWUiLCJLdWxsYW7EsWPEsURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJLdWxsYW7EsWPEsUxpc3RlbGUiOiJ0cnVlIiwiS3VsbGFuxLFjxLFTaWwiOiJ0cnVlIiwiS3VsbGFuxLFjxLFHw7xuY2VsbGUiOiJ0cnVlIiwiS3VsbGFuxLFjxLFFa2xlIjoidHJ1ZSIsIkdydXAgVGFuxLFtbGFyxLFEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiR3J1cCBUYW7EsW1sYXLEsUxpc3RlbGUiOiJ0cnVlIiwiR3J1cCBUYW7EsW1sYXLEsVNpbCI6InRydWUiLCJHcnVwIFRhbsSxbWxhcsSxR8O8bmNlbGxlIjoidHJ1ZSIsIkRNT0RldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJETU9MaXN0ZWxlIjoidHJ1ZSIsIkRNT1NpbCI6InRydWUiLCJETU9Hw7xuY2VsbGUiOiJ0cnVlIiwiRE1PRWtsZSI6InRydWUiLCJTYXTEsW4gQWxtYSBGYXR1cmFzxLFEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgRmF0dXJhc8SxTGlzdGVsZSI6InRydWUiLCJTYXTEsW4gQWxtYSBGYXR1cmFzxLFTaWwiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgRmF0dXJhc8SxR8O8bmNlbGxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIEZhdHVyYXPEsUVrbGUiOiJ0cnVlIiwiVGVkYXJpa8OnaURldGF5IEfDtnLDvG50w7xsZSI6InRydWUiLCJUZWRhcmlrw6dpTGlzdGVsZSI6InRydWUiLCJUZWRhcmlrw6dpU2lsIjoidHJ1ZSIsIlRlZGFyaWvDp2lHw7xuY2VsbGUiOiJ0cnVlIiwiVGVkYXJpa8OnaUVrbGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgxLByc2FsaXllc2lEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgxLByc2FsaXllc2lMaXN0ZWxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIMSwcnNhbGl5ZXNpU2lsIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIMSwcnNhbGl5ZXNpR8O8bmNlbGxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIMSwcnNhbGl5ZXNpRWtsZSI6InRydWUiLCJTYXTEsW4gQWxtYSBTaXBhcmnFn2lEZXRheSBHw7Zyw7xudMO8bGUiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgU2lwYXJpxZ9pTGlzdGVsZSI6InRydWUiLCJTYXTEsW4gQWxtYSBTaXBhcmnFn2lTaWwiOiJ0cnVlIiwiU2F0xLFuIEFsbWEgU2lwYXJpxZ9pR8O8bmNlbGxlIjoidHJ1ZSIsIlNhdMSxbiBBbG1hIFNpcGFyacWfaUVrbGUiOiJ0cnVlIiwibmJmIjoxNzE0MTE4NzMwLCJleHAiOjE3MTU0MTQ3MzAsImlzcyI6ImNybS5uZXR3b3Jra3VydW1zYWwuY29tIiwiYXVkIjoiY3JtLm5ldHdvcmtrdXJ1bXNhbC5jb20ifQ.u4jt__q1KI06jKTQOtuxgwMFWKYYJNqwUdBDS4SyuTU"
            }
        });
        const responseData = await response.json();
        return responseData
    };

    export default getData
     */
    
