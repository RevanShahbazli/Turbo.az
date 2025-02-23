const arr = [
    { id: 1, marka: 'Mercedes', qiymet: '10 500', model: 'w202', mator: '2.0', il: '1998', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg',yurus:'115 000' },
    { id: 2, marka: 'Kia', qiymet: '21 000', model: 'Rio', mator: '1.4', il: '2014', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg',yurus:'128 613' },
    { id: 3, marka: 'Hyundai', qiymet: '12 000', model: 'Tucson', mator: '2.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg',yurus:'338 200' },
    { id: 4, marka: 'LADA (VAZ)', qiymet: '35 000', model: '2107', mator: '1.6', il: '2010', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg', yurus:'74 600' },
    { id: 5, marka: 'BMW', qiymet: '28 700', model: 'M5 e39', mator: '4.4', il: '1998', reng: 'blue', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg' ,yurus:'38 450'},
    { id: 6, marka: 'Mercedes', qiymet: '86 500', model: 'CLS', mator: '5.5', il: '2013', reng: 'gray', img: 'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg',yurus:'191 100' },
    { id: 7, marka: 'Toyota', qiymet: '54 000', model: 'Camry', mator: '3.0', il: '2021', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg',yurus:'133 800' },
    { id: 8, marka: 'Porche', qiymet: '118 400', model: '911 Carrera', mator: '4.4', il: '2023', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg',yurus:'45 000' },
    { id: 9, marka: 'Dodge', qiymet: '38 500', model: 'Challenger', mator: '7.2', il: '2018', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg' ,yurus:'28 900'},
    { id: 10, marka: 'Nissan', qiymet: '86 000', model: 'GTR R-35', mator: '3.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg',yurus:'64 400' },
    { id: 11, marka: 'Audi', qiymet: '124 100', model: 'RS7', mator: '4.0', il: '2015', reng: 'dimgrey', img: 'https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg',yurus:'12 700' },
    { id: 12, marka: 'Toyota',qiymet: '15 800', model: 'Corolla', mator: '1.6', il: '2016', reng: 'white',img: 'https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg',yurus:'186 000km'},
    { id: 13, marka: 'Honda', qiymet: '18 500', model: 'Civic', mator: '1.8', il: '2017', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg',yurus:'335 880'},
    { id: 14, marka: 'Volkswagen', qiymet: '23 200', model: 'Golf', mator: '2.0', il: '2019', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg',yurus:'224 200'}
]
const carName = [
    {name:'Mercedes',
     img:'img/CarLogo/mercedes.png'
    },
    {name:'Lada(VAZ)',
     img:'img/CarLogo/lada.png'
    },
    {name:'Hyundai',
     img:'img/CarLogo/hyundai.png'
    },
    {name:'Kia',
     img:'img/CarLogo/kia.png'
    },
    {name:'Toyota',
     img:'img/CarLogo/toyota.png'
    },
    {name:'BMW',
     img:'img/CarLogo/bmw.png'
    },
    {name:'Ford',
     img:'img/CarLogo/ford.png'
    },
    {name:'Opel',
     img:'img/CarLogo/opel.png'
    }
]

const Marka = document.getElementById("allMarks")
const cards = document.getElementById("Cards")
const searchMark = document.getElementById("searchMark")
const markList = document.getElementById("markList")
const markInp = document.getElementById("markInp");


getCar()

function getCar(){
    let kod = ''
    arr.forEach(item=>{
        kod +=
            `<div class="min-w-44 mx-2 my-3 hover: rounded-md shadow-md bg-gray-50 text-gray-800">
                    <img src="${item.img}" alt="" class="object-cover object-center w-[176px] rounded-t-md h-32 dark:bg-gray-500">
                    <div class="flex flex-col justify-between">
                        <div class="p-[10px]">
                            <h2  class="font-[Helveticamedium] text-[#212c3a] text-[16px]  tracking-wide">${item.qiymet} AZN</h2>
                            <p style="font-family: Helvetica, sans-serif;" class="text-[14px] mt-0 text-gray-800">${item.marka} ${item.model}</p>
                            <p style="font-family: Helvetica, sans-serif;" class="text-[14px] text-gray-800">${item.il}  ${item.mator}  ${item.yurus}km</p>

                        </div>
                    </div>
                </div>`
                cards.innerHTML = kod                
    })
}

function filtrMark(){
    searchMark.style.display = "block"
    cards.style.display = "none"
    let kod = `<ul class="ml-4 text-[15px] font-[HelveticaLight]">`
    carName.forEach(item=>{
        kod+=`<li style="border-bottom:1px solid #f1f3f7" class="border-b-2 cursor-pointer flex items-center py-3">
                    <img width="30px" class="mx-2" src="${item.img}" alt=""/>${item.name}</li>`
    })
    kod+=`</ul>`
    markList.innerHTML = kod
    


}
function hideDisp(){
    searchMark.style.display = "none"
    cards.style.display = "flex"

}
function getMark(){
    let kod = `<ul class="ml-4 text-[15px] font-[HelveticaLight]">`
    carName.filter(item=>{ 
        (item.name).toLocaleLowerCase().includes((markInp.value).toLocaleLowerCase()) ? 
        kod+=`<li style="border-bottom:1px solid #f1f3f7" class="border-b-2 cursor-pointer flex items-center py-3">
                    <img width="30px" class="mx-2" src="${item.img}" alt=""/>${item.name}</li>`
         : '';
        markList.innerHTML=kod
    })
    
}
