const deleteProduct = async (btn) => {
    try {
      const response = await fetch(`https://sa-intelbras-back-3.onrender.com/products/${btn.getAttribute("data-id")}`, {
        method: 'DELETE', 
      });
  
      const result = await response.json(); 
  
      if (response.ok) {
        toastr.success("Produto removido com sucesso!");
        const parentDiv = btn.closest('.product'); 

      if (parentDiv) {
        parentDiv.parentNode.removeChild(parentDiv); 
      }
      } else {
        toastr.error("Erro ao deletar o produto.");
      }
    } catch (error) {
        toastr.error("Erro ao deletar produto. Tente mais tarde.");
    }
  };
  