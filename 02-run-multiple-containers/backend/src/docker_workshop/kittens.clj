(ns docker-workshop.kittens
  (:import (java.util UUID)))

(defonce kittens (atom {}))

(defn add [{ :keys [url, comment]}]
  (let [id (.toString (UUID/randomUUID))
        kitten {:url url :comment comment :id id}]
    (swap! kittens #(assoc % (keyword id) kitten))
    kitten))

(defn get [id]
  ((keyword id) @kittens))

(defn remove [id]
  (let [kitten (get id)]
    (swap! kittens #(dissoc % (keyword id)))
    kitten))

(defn get-all []
  (or (-> @kittens vals) []))



(comment
  (reset! kittens {})
  (remove {:id "6dd98845-e20a-4576-9e5b-b3b25ac332f7"})
  (add {:url "placekitten.org" :comment "This is cute"})
  (get-all)
  (get "9976949f-fab1-46c6-b3ab-c859462048f8")

  (->> @kittens
       (filter
         (fn [[key _]]
           (not (= key (keyword "3a31d953-37c8-4d8f-881a-ea5d173b2ef8"))))))
  (keyword "string")
  (clojure.pprint/pprint @kittens))