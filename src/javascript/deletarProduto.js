const deleteProduct = async (btn) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${btn.getAttribute("data-id")}`, {
        method: 'DELETE', 
      });
  
      const result = await response.json(); 
  
      if (response.ok) {
        confirm("Produto deletado!")


        const parentDiv = btn.closest('.product'); 
  if (parentDiv) {
    parentDiv.parentNode.removeChild(parentDiv); 
  }
      } else {
        alert(result.message || 'Erro ao deletar o produto.');
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
      alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    }
  };
  