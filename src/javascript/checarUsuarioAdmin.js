// document.addEventListener('DOMContentLoaded', () => {
//     async function getUserPermissions() {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.error('Token não encontrado');
//             return { isAdmin: false, roles: [] };
//         }

//         const response = await fetch('https://sa-intelbras-api.onrender.com/users/permissions', {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         if (response.ok) {
//             console.log(response.json());
//             return await response.json(); 
//         } else {
//             console.error('Erro ao obter permissões');
//             return { isAdmin: false, roles: [] };
//         }
//     }

//     getUserPermissions()
// });
