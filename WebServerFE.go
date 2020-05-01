/*
 SERVIDOR GO
*/
//Configuracion para el servidor

package main

import (
	"fmt"
	"html/template"
	"net/http"
)

//Llamada a funcion para levantar servidor desde puerto 5000
func index(w http.ResponseWriter, r *http.Request) {

	template, err := template.ParseFiles("index.html")
	if err != nil {
		fmt.Fprintf(w, "Página no encontrada")
	} else {
		template.Execute(w, nil)
	}
}

func main() {
	http.Handle("/webpage/", http.StripPrefix("/webpage/", http.FileServer(http.Dir("webpage/"))))
	//http.Handle("/webpage/css/", http.StripPrefix("/webpage/css/", http.FileServer(http.Dir("webpage/css/"))))

	http.HandleFunc("/", index)
	fmt.Println("Server GO listening at 5000")
	http.ListenAndServe(":5000", nil)

}
