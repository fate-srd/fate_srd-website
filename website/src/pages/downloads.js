// import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Layout from '../components/layout';

// const Downloads = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allNodeDownload(sort: { fields: title }) {
//         edges {
//           node {
//             title
//             field_link {
//               uri
//               url
//             }
//             field_hosted_elsewhere
//             field_file {
//               description
//               display
//             }
//             relationships {
//               field_file {
//                 filename
//                 id
//                 size
//                 uri {
//                   url
//                   value
//                 }
//               }
//               field_dl_tags {
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   console.log(data.allNodeDownload.edges);

//   return (
//     <Layout>
//       <main className="main-content-wrapper">
//         <h1 className="page-title">Downloads</h1>
//       </main>
//     </Layout>
//   );
// };

// export default Downloads;
