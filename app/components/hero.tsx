import foto from "../nurani syadyah.jpg";
function Profile () {
    return (
        <img
        src={foto.src}
        alt="Nurani" className="fotoku" />);
    }


    export default function Hero() {
        return (
            <div className="container mx-auto p-2 text-center">
                <h1 className="text-blue-400 font-bold">CV ONLINE</h1>    
        <h2 className="text-3xl">Nurani Sya'dyah</h2>
        <Profile />
        <p>
        Saya adalah Nurani Sya'dyah, mahasiswa aktif semester 5 Program D3 Komputerisasi Akuntansi di Universitas Ma'soem. 
        Dengan passion yang kuat di bidang akuntansi dan bisnis, saya bercita-cita menjadi seorang CEO yang sukses dan berpengaruh. 
        Saya memiliki kemampuan analisis yang baik dan keterampilan komunikasi yang efektif, 
        yang saya yakini akan membantu saya berkontribusi secara signifikan di dunia profesional.
        </p>
        </div>
    );
}