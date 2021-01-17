(ns docker-workshop.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.util.response :as ring-response :refer [response content-type]]
            [jumblerg.middleware.cors :refer [wrap-cors]]
            [docker-workshop.kittens :as kittens])

  (:import (clojure.lang ExceptionInfo)))

(defn api-response
  ([body]
   (api-response body 200))
  ([body status]
   (-> body
       (response)
       (content-type "application/json")
       (ring-response/status status))))

(defroutes app-routes
           (GET "/kittens" [] (api-response (kittens/get-all)))
           (GET "/kitten/:id" [id] (if-let [kitten (kittens/get id)]
                                     (api-response kitten)
                                     (api-response {} 404)))
           (POST "/kitten" {json :body} (api-response (kittens/add json)))
           (DELETE "/kitten/:id" [id] (api-response (kittens/remove id)))
           (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-json-response)
      (wrap-json-body {:keywords? true})
      (wrap-cors #".*")
      (wrap-defaults api-defaults)))

(comment
  (->> (trips) (map #(dissoc % :_id))))