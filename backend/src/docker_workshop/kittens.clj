(ns docker-workshop.kittens
  (:require [docker-workshop.db :as db])
  (:import (java.util UUID)))

(defonce kittens (atom {}))

(defn add [{ :keys [url, comment]}]
  (let [id (.toString (UUID/randomUUID))
        kitten {:url url :comment comment :id id}]
    (db/write-kitten kitten)
    kitten))

(defn get [id]
  (db/get-kitten id))

(defn remove [id]
  (let [kitten (get id)]
    (db/delete-kitten id)
    kitten))

(defn get-all []
  (db/get-kittens))



(comment
  (reset! kittens {})
  (remove {:id "6dd98845-e20a-4576-9e5b-b3b25ac332f7"})
  (add {:url "placekitten.org" :comment "This is cute"})
  (get-all)
  (get "f01b71eb-d454-4b7c-8c49-e4afb11ac13e")

  (->> @kittens
       (filter
         (fn [[key _]]
           (not (= key (keyword "3a31d953-37c8-4d8f-881a-ea5d173b2ef8"))))))
  (keyword "string")
  (clojure.pprint/pprint @kittens))