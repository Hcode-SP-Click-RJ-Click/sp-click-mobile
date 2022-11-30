import { PlaceType } from "../types/PlaceType";

export const placesData: PlaceType[] = [{
    id: 1,
    title: "Zoológico de São Paulo",
    subtitle: "Uma aventura animal!",
    image: "https://ppcult-2022.web.app/images/sp/zoo.jpg",
    rating: 4,
    categories: [1, 7],
    address: 'Av. Miguel Estefno, 4241 - Água Funda, São Paulo - SP, 04301-905',
    description: 'O Parque Zoológico de São Paulo, localizado na Zona Sul da cidade, é o maior jardim zoológico do Brasil. Abriga as nascentes do histórico riacho do Ipiranga, ao sul da cidade de São Paulo, localizado em uma área de 824 529 metros quadrados de Mata Atlântica original, com quatro quilômetros de alamedas.',
}, {
    id: 2,
    title: "Estação da Luz",
    subtitle: "Um dos cartões postais mais antigos de São Paulo",
    image: "https://ppcult-2022.web.app/images/sp/luz.jpg",
    rating: 4.8,
    categories: [1],
    address: 'Bairro da Luz, São Paulo - SP',
    description: 'A Estação da Luz é uma das mais importantes estações ferroviárias da cidade de São Paulo. Possui um grande hall de entrada, uma plataforma central e três laterais. Atende às linhas 7 e 11 da Companhia Paulista de Trens Metropolitanos.',
}, {
    id: 3,
    title: "MASP",
    subtitle: "Um prato cheio para os amantes da Arte Moderna",
    image: "https://ppcult-2022.web.app/images/sp/masp.jpg",
    rating: 5,
    categories: [1, 2],
    address: 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200',
    description: 'Museu de Arte de São Paulo Assis Chateaubriand é um centro cultural e museu brasileiro concebido em 1947 idealizado pelo jornalista paraibano Assis Chateaubriand com o crítico de arte italiano Pietro Bardi.',
}];