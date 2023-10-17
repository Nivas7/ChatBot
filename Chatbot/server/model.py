import pandas as pd
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.tree import DecisionTreeClassifier
from sklearn.feature_extraction.text import TfidfTransformer,TfidfVectorizer
from sklearn.pipeline import Pipeline
import joblib




data= "./dialogs.txt"
df = pd.read_csv(data, sep='\t', header=None)

df[0] = df[0].str.lower()
df[1] = df[1].str.lower()



Pipe = Pipeline([
    ('bow',CountVectorizer()),
    ('tfidf',TfidfTransformer()),
    ('classifier',DecisionTreeClassifier())
])

Pipe.fit(df[0],df[1])


joblib.dump(Pipe, "model.pkl")
