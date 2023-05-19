import Image from "next/image";

function ImagePage() {
  return (
    <>
      <Image
        src={"/imgs/1.jpg"}
        alt="some random text"
        width="800"
        height="800"
        placeholder="blur"
      />
      <Image
        src={"/imgs/1.jpg"}
        alt="some random text"
        width="800"
        height="800"
        placeholder="blur"
      />
      <Image
        src={"/imgs/1.jpg"}
        alt="some random text"
        width="800"
        height="800"
        placeholder="blur"
      />
    </>
  );
}

export default ImagePage;
