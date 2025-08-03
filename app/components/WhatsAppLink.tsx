const WhatsappLink = () => {
  const phone = "919500984449";
  const message = encodeURIComponent("Hello, I would like to order a cake!");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-200 hover:underline hover:text-teal-500 font-semibold"
    >
      Chat with us on WhatsApp
    </a>
  );
};

export default WhatsappLink;
